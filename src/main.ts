
import Vue from 'vue';

import './app.log';
import './app.model';
import store from './app.store';
import router from './app.router';



let _vm: any = new Vue({
    el: '#app',
    store,
    router
});


  //vConsole.log('asdas');
