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
    timer: number;
    count: number;
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
        },
        submit: {
            disabled: true
        }
    }
    pohoneBlur() {
        let form: any = this.form;
        if (this.checkPhone()) {
            form.btn.disabled = false;
        } else {

        }
        console.log(this.form)
    }
    codeBlur() {
        let form: any = this.form;
        console.log('codeBlur:', form.code.value);
        if (form.code.value) {
            form.submit.disabled = false;
        } else {
            form.submit.disabled = true;
        }
    }
    doSubmit() {
        console.log('doSubmit...');
        let form: any = this.form;
        if (form.phone.code === form.code.value) {
            form.submit.disabled = false;
            form.error.show = false;
            // submitting
            this.$router.push('/');
        } else {
            form.submit.disabled = true;
            //form.error.msg = false;
            form.error.show = true;
        }
    }
    getCode() {
        let form: any = this.form;
        form.phone.code = Array.prototype.slice.call('111111').map(() => { return Math.ceil(Math.random() * 9) }).join('');
        form.btn.disabled = true;
        this.count = 59;
        form.btn.msg = `重新获取${this.count}s`;
        this.timer = window.setInterval(() => {
            if (!this.count) {
                window.clearInterval(this.timer);
            }
            form.btn.msg = `重新获取${this.count--}s`;
        }, 1000);
    }
    //钩子
    mounted() {
        let scope: any = Vue;
        console.log('mounted', this, scope.i18n);
        //this.message = 'bbbbbbbb';
    }
    destroyed() {
        window.clearInterval(this.timer);
        console.log('destroyed', this);
    }
    checkPhone() {
        let value = (<any>this).form.phone.value;
        if (!(/^1[34578]\d{9}$/.test(value))) {
            console.log("手机号码有误，请重填");
            return false;
        }
        return true;
    }
}
