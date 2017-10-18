import Component from 'vue-class-component';
import Vue from 'vue';
//let rootComponent = require('./demo/demo.vue') ;

@Component({
   //components: rootComponent,
    template: '<button @click="onClick">Click!</button>'
})
export class MyComponent extends Vue {
    // 初始数据可以直接声明为实例的属性
    message: string = 'Hello!';
    // 组件方法也可以直接声明为实例的方法
    onClick(): void {
        window.alert(this.message)
    }
}
