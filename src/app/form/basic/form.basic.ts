import Component from 'vue-class-component';
import Vue from 'vue';
import './form.basic.scss';


@Component({
   template:require('./form.basic.html')
})
export class FromBasic extends Vue{
    mouted(){
      console.log(this);
    }
}
