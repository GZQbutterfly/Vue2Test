import Component from 'vue-class-component';
import Vue from 'vue';

@Component({
    template: `<div><ul>
          <li v-for="(item, index) in listScope">
            {{index + 1}} Name: {{ item.name }}; Age: {{item.age}}
          </li>
        </ul></div>`
})
export class ListComponent extends Vue {
    // 初始数据可以直接声明为实例的属性
    listScope:object = [
    {name:'小明',age: 23},
    {name:'小张',age: 24},
    {name:'小强',age: 25},
    {name:'小华',age: 26}];
}
