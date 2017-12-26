import Component from 'vue-class-component';
import Vue from 'vue';
import { BaseVue } from '../../base/base.vue';

import './form.valid.scss';


@Component({
    name:'FormValid',
    template: require('./form.valid.html')
})
export class FromValid extends BaseVue {
    show = true;
    username = '';
    formstate = {};
    myform = {};
    model = {
        name: '',
        email: 'invalid-email'
    };
    _$service: any;
    mounted() {
        let _popup = this.$store.state.$popup;
        let result = _popup();
        console.log('我在马路边捡到一分钱', result);
    }
    onSubmit(...args) {
        console.log(...args);
    }
    doShow() {
        this.show = !this.show;
    }
}
