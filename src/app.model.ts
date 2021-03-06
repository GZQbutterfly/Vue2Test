import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';


const VueForm = require('vue-form');


import VueScroller from 'vue-scroller';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
// import 'swiper/dist/css/swiper.css';

import 'vue-resize/dist/vue-resize.css';
import { ResizeObserver } from 'vue-resize'

Vue.component('resize-observer', ResizeObserver);

Vue.use(Vuex);
Vue.use(VueRouter);

Vue.use(VueScroller);
Vue.use(VueForm);

Vue.component('app-swiper', swiper);
Vue.component('app-swiper-slide', swiperSlide);
