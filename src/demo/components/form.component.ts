import Component from 'vue-class-component';
import Vue from 'vue';

@Component({
    template: require('./form.component.html')
})
export class FormComponent extends Vue {
    // 初始数据可以直接声明为实例的属性
    formScope:object = {name:'小明',age: 23};
    message: string = 'Hello!';
    title: string = '我是标题';

    onClick(){
      //window.alert(this.formScope.name);
    }

    //钩子
    mounted() {
        console.log('mounted', this);
    }
    init(){
        console.log('init', this);
    }


    beforeDestroy(){
        console.log('beforeDestroy', this);
    }
    destroyed(){
        console.log('destroyed', this);
    }
}
