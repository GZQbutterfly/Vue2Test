import Vue from 'vue';
import {Popup} from './popup';
import {Config} from './config';
import {get, set, merge} from 'lodash';

/**
 * options:
 *  title        : '标题''
 *  close        : true        关闭按钮 默认true
 *  closeBefore  : fn          关闭事件 before
 *  closeAfter   : fn          关闭事件 after
 *  mode         : true        遮布 默认为true
 *  content      : '内容'   内容和组件 任选其一，默认为content
 *  components   : {template:''} or vue.components
 *  const Popup = Vue.extend(Popup)
 */
export default (options?: Config) => {
    let _options: Config = {
        title: '',
        close: true,
        closeBefore: () => { },
        closeAfter: () => { },
        mode: true,
        content: '',
        components: {},
        algin: 'center'
    };





    let _newDiv = document.createElement('div')
    document.body.appendChild(_newDiv);

    let _popup = new Vue({
        el: _newDiv,
        data() {
            return {
                name: 'dialog-popup'
            }
        },
        template: '<div><dialog-popup></dialog-popup></div>',
        components: {
            'dialog-popup': Popup
        }
    });

    // Vue.nextTick(() => {
    //     ;
    // });

    return {
        close() {

        }
    };
};
