import './main.ts';

import './weui.min.css';
import 'vue2-animate/dist/vue2-animate.min.css';
import './assets/swiper/swiper.css';
import './index.scss';


(function(win, doc) {
   let wH = win.innerHeight;
   let _app:any = doc.querySelector('#app');
   _app.style.overflowY = 'scroll';
   _app.style.height = (wH - 26) + 'px';
} (window, document));


console.log('这是入口文件');
