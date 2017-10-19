import './index.scss';
import Vue from 'vue';
import Vuex from 'vuex';
import {MyComponent} from './demo/demo.component';
import router from './demo/router/router';
import {PComponent} from './demo/components/p.component';
import {CComponent} from './demo/components/c.component';


Vue.use(Vuex);


Vue.component('p-component', PComponent);
Vue.component('c-component', CComponent);

new Vue({
  el: '#example',
  router
});

new Vue({
  el: '#app',
  render: h => h(MyComponent)
});
