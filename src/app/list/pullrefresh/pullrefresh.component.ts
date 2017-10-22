import Component from 'vue-class-component';
import Vue from 'vue';

import './pullrefresh.component.scss';

@Component({
    props: {
        offset: {
            type: Number,
            default: 100 //默认高度
        },
        enableInfinite: {
            type: Boolean,
            default: true
        },
        enableRefresh: {
            type: Boolean,
            default: true
        },
        dataList: {
            default: false,
            required: false
        },
        onRefresh: {
            type: Function,
            default: undefined,
            required: false
        },
        onInfinite: {
            type: Function,
            default: undefined,
            require: false
        }
    },
    template: require('./pullrefresh.component.html')
})
export class PullrefreshComponent extends Vue {
    data() {
        return {
            top: 0,
            state: 0,
            startX: 0,
            startY: 0,
            touching: false,
            infiniteLoading: false,
            downFlag: false, //用来显示是否加载中
        }
    }
    touchStart(e) {
        let _self: any = this;
        _self.startY = e.targetTouches[0].pageY;
        _self.startX = e.targetTouches[0].pageX;
        _self.startScroll = this.$el.scrollTop || 0;
        _self.touching = true; //留着有用，不能删除
        _self.dataList.noFlag = false;
        _self.$el.querySelector('.load-more').style.display = 'block';
    }
    touchMove(e) {
        let _self: any = this;
        if (!_self.enableRefresh || _self.dataList.noFlag || !_self.touching) {
            return
        }
        let diff = e.targetTouches[0].pageY - _self.startY - _self.startScroll
        if (diff > 0) e.preventDefault()
        _self.top = Math.pow(diff, 0.8) + (_self.state === 2 ? _self.offset : 0)
        if (_self.state === 2) { // in refreshing
            return
        }
        if (_self.top >= _self.offset) {
            _self.state = 1
        } else {
            _self.state = 0
        }

        let more = _self.$el.querySelector('.load-more');
        if (!_self.top && _self.state === 0) {
            more.style.display = 'block';
        } else {
            more.style.display = 'none';
        }
    }
    touchEnd(e) {
        let _self: any = this;
        if (!_self.enableRefresh) {
            return
        }
        _self.touching = false
        if (_self.state === 2) { // in refreshing
            _self.state = 2
            _self.top = _self.offset
            return
        }
        if (_self.top >= _self.offset) { // do refresh
            _self.refresh()
        } else { // cancel refresh
            _self.state = 0
            _self.top = 0
        }

        //用于判断滑动是否在原地 ----begin
        let endX = e.changedTouches[0].pageX,
            endY = e.changedTouches[0].pageY,
            dy = _self.startY - endY,
            dx = endX - _self.startX;

        //如果滑动距离太短
        if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
            // console.log("滑动距离太短")
            return;
        }

        //--------end--------

        if (!_self.enableInfinite || _self.infiniteLoading) {
            return
        }

        let outerHeight = _self.$el.clientHeight,
            innerHeight = _self.$el.querySelector('.inner').clientHeight,
            scrollTop = _self.$el.scrollTop,
            ptrHeight = _self.onRefresh ? _self.$el.querySelector('.pull-refresh').clientHeight : 0,
            bottom = innerHeight - outerHeight - scrollTop - ptrHeight;

        //console.log(bottom + " __ " + _self.offset)

        if (bottom <= _self.offset && _self.state === 0) {
            _self.downFlag = true;
            _self.infinite();
        } else {
            _self.$el.querySelector('.load-more').style.display = 'none';
            _self.downFlag = false;
        }

    }
    refresh() {
        let _self: any = this;
        _self.state = 2;
        _self.top = _self.offset;
        setTimeout(() => {
            _self.onRefresh(_self.refreshDone)
        }, 1000);
    }
    refreshDone() {
        let _self: any = this;
        _self.state = 0
        _self.top = 0
    }

    infinite() {
        let _self: any = this;
        _self.infiniteLoading = true

        setTimeout(() => {
            _self.onInfinite(_self.infiniteDone);
        }, 2000);
    }

    infiniteDone() {
        let _self: any = this;
        _self.infiniteLoading = false
    }
}
