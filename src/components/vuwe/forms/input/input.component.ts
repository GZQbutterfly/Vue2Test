import Component from 'vue-class-component';
import Vue from 'vue';
import { childMixin } from '../../mixins';
import './input.component.scss';
import {isObject} from 'lodash';

@Component({
    mixins: [childMixin],
    computed: {
        setInputObj() {
            let inputConfig = this.inputConfig;
            return (inputConfig ? (isObject(inputConfig)? inputConfig : JSON.parse(inputConfig)) :false);
        }
    },
    props: {
        addon: {type: Boolean, default: false},
        warn: {type: Boolean, default: false},
        sucess: {type: Boolean, default: false},
        isSwitch: {type: Boolean, default: false},
        selectBefore: {type: Boolean, default: false},
        selectAfter: {type: Boolean, default: false},
        select: {type: Boolean, default: false},
        label: {type: String},
        inputConfig: {type: [Object, String]},
        eventClick: {type:Function},
        eventInput: {type:Function},
        eventChange: {type:Function},
        eventFocus: {type:Function},
        eventBlur: {type:Function},
        tips: {type: String},
        value: {type: String}
    },
    template: require('./input.component.html')
})
export class VwInput extends Vue {
  eventClick:Function;
  eventInput:Function;
  eventChange:Function;
  eventFocus:Function;
  eventBlur:Function;
  onItemClick(...args){
    this.eventClick && this.eventClick(...args);
  }
  onItemInput(...args){
    this.eventInput && this.eventInput(...args);
  }
  onItemChange(...args){
    this.eventChange && this.eventChange(...args);
  }
  onItemFocus(...args){
    this.eventFocus && this.eventFocus(...args);
  }
  onItemBlur(...args){
    this.eventBlur && this.eventBlur(...args);
  }

}
