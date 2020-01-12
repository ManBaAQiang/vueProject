import Vue from 'vue';
import Vuex from 'vuex';

import people_vuex from './people_vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        people_vuex:people_vuex
    }
})