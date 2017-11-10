import Component from 'vue-class-component';
import Vue from 'vue';
import './popup.scss';

const Swiper = require('../../assets/swiper/swiper.js');

@Component({
    template: require('./popup.html')
})
export class Popup extends Vue {
    classContainer = '.swiper-ui';
    swiper: any;
    data() {
        return this.popupInit();
    }
    mounted() {
        console.log(this.swiper);
        let _self: any = this;
        this.setHTMLScollerYHidden(true);

        this.$nextTick(()=>{
           _self.swiper = new Swiper(_self.classContainer,{
             scrollbar: '.swiper-scrollbar',
             direction: 'vertical',
             slidesPerView: 'auto',
             mousewheelControl: true,
             freeMode: true
           });

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
    popupInit(){
      let width = 300;
      let height = 400;
      let _bH = document.body.clientHeight;
      let _bW = document.body.clientWidth;
      return {
          popupContainerStyle: {
            width: width + 'px',
            height: height+ 'px',

          },
          popupBodyStyle:{
            height: '300px'
          }
      };
    }
    algin(){
      
    }

}
