import Component from 'vue-class-component';
import Vue from 'vue';
import listService from './list.component.service';
import {PullrefreshComponent} from './pullrefresh/pullrefresh.component';
//import './list.component.scss';

@Component({
    template: require('./list.component.html'),
    components: {
        'v-scroll': PullrefreshComponent
    },
})
export class ListComponent extends Vue {
    // 初始数据可以直接声明为实例的属性
    listScope: Array<object> = [
        { name: '小明', age: 23 },
        { name: '小张', age: 24 },
        { name: '小强', age: 25 },
        { name: '小强', age: 25 },
        { name: '小华', age: 26 }];
    data() {
        return {
            counter: 1, //当前页
            num: 10, // 一页显示多少条
            pageStart: 0, // 开始页数
            pageEnd: 0, // 结束页数
            listdata: [], // 下拉更新数据存放数组
            scrollData: {
                noFlag: false //暂无更多数据显示
            }
        }
    }
    mounted() {
        this.getList();
    }
    getList() {
        let _self: any = this;
        var response = []
        for (let i = 0; i < 20; i++) {
            response.push({
                date: "2017-06-1" + i,
                portfolio: "1.5195" + i,
                drop: i + "+.00 %",
                state: 1
            })
        }
        _self.listdata = response.slice(0, _self.num);
    }
    onRefresh(done) {
        this.getList();

        done(); // call done

    }
    onInfinite(done) {
        let _self: any = this;
        _self.counter++;
        let end = _self.pageEnd = _self.num * _self.counter;
        let i = _self.pageStart = _self.pageEnd - _self.num;

        let more = _self.$el.querySelector('.load-more')
        for (i; i < end; i++) {
            if (i >= 30) {
                more.style.display = 'none'; //隐藏加载条
                //走完数据调用方法
                _self.scrollData.noFlag = true;

                break;
            } else {
                _self.listdata.push({
                    date: "2017-06-1" + i,
                    portfolio: "1.5195" + i,
                    drop: i + "+.00 %",
                    state: 2
                })
                more.style.display = 'none'; //隐藏加载条
            }
        }
        done();
    }

}
