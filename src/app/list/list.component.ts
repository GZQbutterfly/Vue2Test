import Component from 'vue-class-component';
import Vue from 'vue';
import listService from './list.component.service';

@Component({
    template: require('./list.component.html')
})
export class ListComponent extends Vue {
    // 初始数据可以直接声明为实例的属性
    listScope: Array<object> = [
        { name: '小明', age: 23 },
        { name: '小张', age: 24 },
        { name: '小强', age: 25 },
        { name: '小华', age: 26 }];
    mounted() {
        listService.getList().then(res => {
          console.log(res)
            this.listScope.push({
                name: 'aa',
                age: 34
            })
        });
    }
}
