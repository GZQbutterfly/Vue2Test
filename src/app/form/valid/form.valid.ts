import Component from 'vue-class-component';
import Vue from 'vue';
import './form.valid.scss';


@Component({
    template: require('./form.valid.html')
})
export class FromValid extends Vue {
    username = '';
    formstate = {};
    myform={};
    model = {
        name: '',
        email: 'invalid-email'
    };
    mounted() {
        console.log('我在马路边捡到一分钱');
    }
    onSubmit(...args) {
        console.log(...args);
    }
}
