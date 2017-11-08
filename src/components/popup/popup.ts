import Component from 'vue-class-component';
import Vue from 'vue';
import './popup.scss';


@Component({
    template: require('./popup.html'),
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper;
        }
    }
})
export class Popup extends Vue {
    notNextTick = true;
    swiper: any;
    data() {
        return this.popupInit();
    }
    mounted() {
        console.log(this.swiper);
        let _self: any = this;
        this.setHTMLScollerYHidden(true);
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
      return {
          popupContainerStyle: {
            width: '300px',
            height: '400px',
          },
          popupBodyStyle:{
            height: '300px'
          },
          swiperOption: {
              scrollbar: '.swiper-scrollbar',
              direction: 'vertical',
              slidesPerView: 'auto',
              mousewheelControl: true,
              freeMode: true
          }
      };
    }

}
