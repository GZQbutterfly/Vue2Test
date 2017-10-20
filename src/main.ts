import './index.scss';
import Vue from 'vue';
import Vuex from 'vuex';
import {MyComponent} from './demo/demo.component';
import router from './demo/router/router';
import {PComponent} from './demo/components/p.component';
import {CComponent} from './demo/components/c.component';
//import i18n from './demo/i18n/i18n.compont';
import vuexI18n from 'vuex-i18n/dist/vuex-i18n.es';
Vue.use(Vuex);

//Vue.use(vuexI18n.pl);


Vue.component('p-component', PComponent);
Vue.component('c-component', CComponent);

// const i18n:any = new VueI18n({
//         locale: 'zh_CN',    // 语言标识
//         messages: {
//             'zh-CN': {
//               'aa': 'asdsd'
//             },   // 中文语言包
//             //'en-US': require('./common/lang/en')    // 英文语言包
//         }
//     })
//
const store = new Vuex.Store({
    modules: {
        i18n: vuexI18n.store
    }
});
Vue.use(vuexI18n.plugin, store);
const translationsEn = {
    "content": "This is some {type} content"
};

const translationsDe = {
    "My nice title": "Ein schöner Titel",
    "content": "Dies ist ein toller Inhalt"
};
let o:any = Vue;
o.i18n.add('en', translationsEn);
o.i18n.add('de', translationsDe);

o.i18n.set('de');

let vm:any = new Vue({
  el: '#example',
  store,
  router
});

// let vm:any =new Vue({
//   el: '#app',
//   render: h => h(MyComponent)
// });
