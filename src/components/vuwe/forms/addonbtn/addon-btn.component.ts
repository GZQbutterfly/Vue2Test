import Component from 'vue-class-component';
import Vue from 'vue';
import { childMixin } from '../../mixins';
import './addon-btn.component.scss';

@Component({
    mixins: [childMixin],
    template: require('./addon-btn.component.html'),
    props: {  eventClick: { type: Function } }
})
export class AddonBtn extends Vue {
    eventClick: Function;
    onItemClick(...args) {
        this.eventClick && this.eventClick(...args);
    }
}
