import Component from 'vue-class-component';
import Vue from 'vue';
import listService from './list.component.service';
import {PullrefreshComponent} from './pullrefresh/pullrefresh.component';

//import './list.component.scss';

@Component({
    template: require('./list.component.html'),
    components: {
        'v-scroll': PullrefreshComponent,

    },
})
export class ListComponent extends Vue {
    // 初始数据可以直接声明为实例的属性
    dataList: any = [
        { name: '小明', age: 23 },
        { name: '小张', age: 24 },
        { name: '小强', age: 25 },
        { name: '小强', age: 25 },
        { name: '小华', age: 26 }];
    moveList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    list = [];
    //data() { return { list: [] } }
    created() {
        // Promise.resolve(true).then(()=>{
        //   this.list = this.dataList
        //   this.$nextTick(() => {
        //       this.scroll = new BScroll(this.$refs.wrapper, {})
        //   })
        // });

    }
    scroll: any;
    // mounted() {
    //     //let wrapper = document.querySelector('.wrapper') ;
    //     //let scroll = new BScroll(wrapper, {});
    //     // this.$nextTick(() => {
    //     //     this.scroll = new BScroll(this.$refs.wrapper, {})
    //     // });
    //     this.top = 1;
    //     this.bottom = 20;
    //
    // }
    items;
    top = 0;
    bottom = 0;
    data() {
        return {
            items: []
        }
    }

    mounted() {
        for (let i = 1; i <= 20; i++) {
            this.items.push(i + ' - keep walking, be 2 with you.')
        }
        this.top = 1
        this.bottom = 20
    }
    refresh(done) {
        setTimeout(() => {
            let start = this.top - 1
            for (let i = start; i > start - 10; i--) {
                this.items.splice(0, 0, i + ' - keep walking, be 2 with you.')
            }
            this.top = this.top - 10;
            done()
        }, 1500)
    }

    infinite(done) {
        if (this.bottom >= 30) {
            setTimeout(() => {
                done(true)
            }, 1500)
            return;
        }

        setTimeout(() => {
            let start = this.bottom + 1
            for (let i = start; i < start + 10; i++) {
                this.items.push(i + ' - keep walking, be 2 with you.')
            }
            this.bottom = this.bottom + 10;
            setTimeout(() => {
                done()
            })
        }, 1500)
    }


    // bottom = 0;
    // infinite(done) {
    //     let $scroller: any = this.$refs.myScroller;
    //     let len = this.dataList.length;
    //     console.log('$scroller resize: ', $scroller.resize);
    //     setTimeout(() => {
    //         if (len < 20) {
    //             let start = this.bottom + 1;
    //             for (let i = start; i < start + 10; i++) {
    //                 this.dataList.push({ name: 'asd' + i, age: 23 + i });
    //             }
    //             this.bottom = this.bottom + 10;
    //         } else {
    //             $scroller.finishInfinite(true);
    //         }
    //         done();
    //         // setTimeout(() => {
    //         //     $scroller.resize();
    //         // })
    //     }, 1500);
    //
    // }
    // top = 0;
    // refresh(done) {
    //     let $scroller: any = this.$refs.myScroller;
    //     setTimeout(() => {
    //         let start = this.top - 1;
    //
    //         for (let i = start; i > start - 10; i--) {
    //             this.dataList.push({ name: 'bbb' + i, age: 23 + i });
    //         }
    //
    //         this.top = this.top - 10;
    //         /* 下面3种方式都可以调用 finishPullToRefresh 方法 */
    //         //$scroller.finishPullToRefresh();
    //         done();
    //     }, 1500)
    // }
    // onItemClick(index, item) {
    //     console.log(index, item);
    // }


}
