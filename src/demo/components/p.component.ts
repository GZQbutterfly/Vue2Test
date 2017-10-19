import Component from 'vue-class-component';
import Vue from 'vue';

@Component({
    template: '<div>我是P <c-component  :p="msg"></c-component></div>'
})
export class PComponent extends Vue {
    msg:string = '我是Parent';
}
