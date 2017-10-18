import './index.scss';
import Vue from 'vue';
import {MyComponent} from './demo.component';
let rootComponent = require('./demo/demo.vue') ;
console.log(Vue);

new Vue({
  el: '#app',
  render: h => h(MyComponent)
  // components:{
  //   'my-component': MyComponent
  // }
});
// Vue.component('my-component', MyComponent);

export default {
    module: 'main'
}
