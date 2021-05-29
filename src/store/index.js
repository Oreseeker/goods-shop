import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        numberOfGoods: 0
    },
    mutations: {
        // CHANGE_LOGIN_WINDOW_VISIBILITY(state, loginWindowVisible) {
        //     state.loginWindowVisible = loginWindowVisible;
        // }
    },
    actions: {
        // changeLoginWindowVisibility(store, loginWindowVisible) {
        //     store.commit('CHANGE_LOGIN_WINDOW_VISIBILITY', loginWindowVisible);
        // }
    },
    getters: {
        numOfGoods(state) {
            return state.numberOfGoods;
        }
    },
    modules: {}
});
