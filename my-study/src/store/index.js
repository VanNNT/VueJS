import Vue from 'vue';
import Vuex from 'vuex';
import robotModule from './module/robots';
import userModule from './module/users';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        foo: 'root-foo'
    },
    modules: {
        robots : robotModule,
        users: userModule
    },
    getters: {
        foo(state) {
            return `root-getter/${state.foo}`;
        }
    }
});