import Component from 'vue-class-component';
import Vue from 'vue';

@Component({
    props: ['p'],
    template: '<div>我是C  {{p}}</div>'
})
export class CComponent extends Vue {
}
