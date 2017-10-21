import './index.scss';
import './weui.css';
import Vue from 'vue';
import Vuex from 'vuex';
import {MyComponent} from './demo/demo.component';
import router from './demo/router/router';
import {PComponent} from './demo/components/p.component';
import {CComponent} from './demo/components/c.component';
//import i18n from './demo/i18n/i18n.compont';
import vuexI18n from 'vuex-i18n/dist/vuex-i18n.es';
import Vuwe from 'vuwe';
Vue.use(Vuex);

Vue.component('p-component', PComponent);
Vue.component('c-component', CComponent);

console.log(Vuwe);
Vue.use(Vuwe);
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
