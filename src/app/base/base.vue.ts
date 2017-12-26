import Vue from 'vue';
import { get } from 'lodash';
export abstract class BaseVue extends Vue {

    abstract _$service;
    constructor(...args) {
        super(...args);
        let _self: any = this;
        let _root = _self.$root;
        let _route = _root.$route;
        let _className = _self.getClassName(_self.constructor.toString());
        console.debug('BaseVue ...', _self, _route);
        console.debug('BaseVue ...', _className);
    }

    mounted() {

    }

    private getClassName(classStr) {
        return classStr.match(/class\s+([\w\d$_]+)s*/)[1];
    }
}