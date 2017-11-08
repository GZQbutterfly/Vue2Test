
/**
 * options:
 *  title        : '标题''
 *  close        : true        关闭按钮 默认true
 *  closeBefore  : fn          关闭事件 before
 *  closeAfter   : fn          关闭事件 after
 *  mode         : true        遮布 默认为true
 *  content      : '内容'       内容和组件 任选其一，默认为content
 *  components   : {template:''} or vue.components
 *  algin        : 'center'    位置 默认center  left, right, top, bottom, center
 *  height       : 400         高度 默认400
 *  width        : 600         宽度 默认600
 *
 */
export interface Config {
    title: string;
    close?: boolean;
    closeBefore?:Function;
    closeAfter?:Function;
    mode?:true;
    content?:string;
    components?:object;
    algin?:string;
}
