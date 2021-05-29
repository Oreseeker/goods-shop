import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        productsInCart: []
    },
    mutations: {
        ADD_PRODUCT_TO_CART(state, product) {
            const foundProductIndex = state.productsInCart.findIndex(prod => prod.id === product.id);
            if (foundProductIndex === -1) {
                state.productsInCart.push(product);
            } else {
                state.productsInCart[foundProductIndex].amount += product.amount;
            }
        }
    },
    actions: {
        addProductToCart(store, product, amount) {
            store.commit('ADD_PRODUCT_TO_CART', product);
        }
    },
    getters: {
        numberOfProductsInCart(state) {
            let numberOfProductsInCart = 0;
            state.productsInCart.forEach(product => {
                numberOfProductsInCart += product.amount
            })
            return numberOfProductsInCart;
        }
    },
    modules: {}
});
