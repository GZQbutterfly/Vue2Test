import Component from 'vue-class-component';
import Vue from 'vue';
import Vuex from 'vuex';

@Component({
    template: require('./form.component.html')
})
export class FormComponent extends Vue {
    // 初始数据可以直接声明为实例的属性
    loginScope: object = {
        error: {
            msg: '验证码错误，请重新输入',
            show: false
        },
        form: {
            phonenumber: '',
            incode: '',
            code: ''
        },
        btn: {
            msg: '获取验证码',
            flag: false
        }
    }

    onClick() {
        //window.alert(this.formScope.name);
    }
    created() {
        console.log('created', this);
        //this.message = 'asdad';
    }
    //钩子
    mounted() {
      let scope:any = Vue;
        console.log('mounted', this, scope.i18n);
        //this.message = 'bbbbbbbb';
    }
    beforeDestroy() {
        console.log('beforeDestroy', this);
    }
    destroyed() {
        console.log('destroyed', this);
    }
}
