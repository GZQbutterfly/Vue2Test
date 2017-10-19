import Vue from 'vue';
import VueRouter from 'vue-router';
import { FormComponent } from '../components/form.component';
import { ListComponent } from '../components/list.component';
import './router.scss';



Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: { name: 'demo2' } },
  {
    path: '/demo',
    name: 'demo',
    component: {
      template: '<div>我是demo</div>'
    }
  },
  {
    path: '/list',
    name: 'list',
    component: ListComponent
  },
  {
    path: '/demo2',
    name: 'demo2',
    component: {
      template: `<div>我是demo2
      <div><router-link to="/second">Go to second</router-link><router-link to="/second1">Go to second1</router-link><router-view></router-view></div></div>
      </div>`
    },
    children: [  //这里就是二级路由的配置
      {
        path: '/second',
        name: 'second',
        component: {
          template: '<div>我是二级路由</div>'
        }
      },
      {
        path: '/second1',
        name: 'second1',
        component: {
          template: '<div>我是二级路由11111</div>'
        }
      }
    ]
  },
  {
    path: '/form',
    name: 'form',
    component: FormComponent
  }
];
// 接着创建路由实例
const router = new VueRouter({
  mode: 'history', //可以是去掉#号
  routes
});

new Vue({ router }).$mount('#routerLayout');
