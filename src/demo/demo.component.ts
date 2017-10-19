import Component from 'vue-class-component';
import Vue from 'vue';

@Component({
    template: require('./demo.component.html')
})
export class MyComponent extends Vue {
    // 初始数据可以直接声明为实例的属性
    message: string = 'Hello!';
    title: string = '我是标题';
    // 组件方法也可以直接声明为实例的方法
    onClick(): void {
        window.alert(this.message);
    }
}
