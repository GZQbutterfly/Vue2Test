//
import vuexI18n from 'vuex-i18n/dist/vuex-i18n.es';
import Vue from 'vue';
import Vuex from 'vuex';
const store = new Vuex.Store({
    modules: {
        i18n: vuexI18n.store
    }
});

Vue.use(vuexI18n.plugin, store);
const translationsEn = {
    "content": "This is some {type} content"
};

const translationsDe = {
    "My nice title": "Ein schöner Titel",
    "content": "Dies ist ein toller Inhalt"
};
let o:any = Vue;
o.i18n.add('en', translationsEn);
o.i18n.add('de', translationsDe);

o.i18n.set('de');
