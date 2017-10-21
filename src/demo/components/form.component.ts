import Component from 'vue-class-component';
import Vue from 'vue';
import Vuex from 'vuex';
import {VwInput, AddonBtn} from '../../components/vuwe';

//let vuwe = require('vuwe');

console.log(VwInput);

@Component({
    template: require('./form.component.html'),
    components: {
        VwInput,
        AddonBtn
    }
})
export class FormComponent extends Vue {
    // 初始数据可以直接声明为实例的属性
    form: object = {
        error: {
            msg: '验证码错误，请重新输入',
            show: false
        },
        phone: {
            type: 'tel',
            name: 'tel',
            placeholder: '请输入手机号',
            value: '18925272179',
            code: ''
        },
        code: {
            type: 'tel',
            name: 'tel',
            placeholder: '请输入验证码',
            value: '',
            disabled: true
        },
        btn: {
          msg: '获取验证码',
          disabled: true

        }
    }
    pohoneBlur() {
        console.log(this.form)
    }
    getCode() {
        let form: any = this.form;
        form.phoneInputConfig.code = Array.prototype.slice.call('111111').map(() => { return Math.ceil(Math.random() * 9) }).join('');
    }

    //钩子
    mounted() {
        let scope: any = Vue;
        console.log('mounted', this, scope.i18n);
        //this.message = 'bbbbbbbb';
    }
    destroyed() {
        console.log('destroyed', this);
    }
}
