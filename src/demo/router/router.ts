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
    },
    beforeRouteEnter(to, from, next) {
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当钩子执行前，组件实例还没被创建
      console.log('beforeRouteEnter')
    },
    beforeRouteUpdate(to, from, next) {
      // 在当前路由改变，但是该组件被复用时调用
      // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
      // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      // 可以访问组件实例 `this`
      console.log('beforeRouteUpdate')
    },
    beforeRouteLeave(to, from, next) {
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`
      console.log('beforeRouteLeave')
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
