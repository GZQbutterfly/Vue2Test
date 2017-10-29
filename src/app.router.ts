import Vue from 'vue';
import VueRouter from 'vue-router';
import {Layout} from './app/layout/layout';
import { ListComponent } from './app/list/list.component';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout
  },
  {
    path: '/list',
    name: 'list',
    component: ListComponent
  }
];
// 接着创建路由实例
const router = new VueRouter({
  mode: 'history', //可以是去掉#号
  routes
});
export default router;
