import Component from 'vue-class-component';
import Vue from 'vue';
import {merge} from 'lodash';

import './popup.scss';

const Swiper = require('../../assets/swiper/swiper.js');

@Component({
    props: ['options'],
    template: require('./popup.html')
})
export class Popup extends Vue {
    classContainer = 'swiper-ui';
    swiper: any;
    data() {
        return this.popupInit();
    }
    mounted() {

        let _self: any = this;
        this.setHTMLScollerYHidden(true);

        this.$nextTick(() => {
            _self.swiper = new Swiper('.' + _self.classContainer, {
                direction: 'vertical',
                slidesPerView: 'auto',
                freeMode: true,
                autoHeight: true,
                //scrollbar:'.swiper-scrollbar',
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
                mousewheel: true,
            });
            console.log(_self.swiper);

        });
    }
    setHTMLScollerYHidden(falg) {
        let _htmlDom = document.querySelector('html');
        if (falg) {
            _htmlDom.classList.add('not-scoller-y');
        } else {
            _htmlDom.classList.remove('not-scoller-y');
        }
    }
    popupInit() {
        let _self: any = this;
        let _bH = window.innerHeight;
        let _bW = window.innerWidth;
        let width = Math.ceil(_bW * 0.7);
        let height = Math.ceil(_bH * 0.6);
        return {
            popupContainerStyle: merge({
                //width: width + 'px',
                //height: height + 'px',
                'max-height': (height + 5) + 'px',
                'max-width': (width + 5) + 'px',

            }, _self.setAlgin(_self.options, width, _bW, height, _bH)),
            popupBodyStyle: {
                //  height: '300px'
            }
        };
    }
    setAlgin(options, w, bW, h, bH) {
        let _self: any = this;
        let _algin = options.algin;
        let _result: any = {};
        if (_algin == 'top') {

        } else if (_algin == 'right') {

        } else if (_algin == 'bottom') {

        } else if (_algin == 'left') {

        } else {
            // center
            _result.left = _self.getRate(w, bW) + '%';
            _result.top = _self.getRate(h, bH) + '%';
        }
        return _result;
    }
    getRate(s, t) {
        return Math.ceil((1 - (s / t)) * 100) / 2;
    }
    resizePopup() {
      let _self: any = this;
      _self.options.resize && _self.options.resize();
        console.log('resize popup ........ ');
    }
}
