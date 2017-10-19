import Component from 'vue-class-component';
import Vue from 'vue';
import Vuex from 'vuex';

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
    created(){
        console.log('created', this);
        //this.message = 'asdad';
    }
    //钩子
    mounted() {
        console.log('mounted', this);
        //this.message = 'bbbbbbbb';
    }
    beforeDestroy(){
        console.log('beforeDestroy', this);
    }
    destroyed(){
        console.log('destroyed', this);
    }
}
