import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [
            {
                id: 0,
                title: 'Порошок Persil',
                image: 'https://gcdn.utkonos.ru/resample/900x900q90/images/photo/3331/3331176H.jpg',
                price: '600',
                inStock: 20,
                rating: 3
            },
            {
                id: 1,
                title: 'Порошок Persil',
                image: 'https://gcdn.utkonos.ru/resample/900x900q90/images/photo/3331/3331176H.jpg',
                price: '600',
                inStock: 0,
                rating: 5,
            },
            {
                id: 2,
                title: 'Порошок Persil',
                image: 'https://gcdn.utkonos.ru/resample/900x900q90/images/photo/3331/3331176H.jpg',
                price: '600',
                inStock: 20,
                rating: 0
            },
            {
                id: 3,
                title: 'Порошок Persil',
                image: 'https://gcdn.utkonos.ru/resample/900x900q90/images/photo/3331/3331176H.jpg',
                price: '600',
                inStock: 20,
                rating: 1
            },
            {
                id: 4,
                title: 'Порошок Persil',
                image: 'https://gcdn.utkonos.ru/resample/900x900q90/images/photo/3331/3331176H.jpg',
                price: '600',
                inStock: 20,
                rating: 4
            },
            {
                id: 5,
                title: 'Порошок Persil',
                image: 'https://gcdn.utkonos.ru/resample/900x900q90/images/photo/3331/3331176H.jpg',
                price: '600',
                inStock: 20,
                rating: 4
            },
            {
                id: 6,
                title: 'Порошок Persil',
                image: 'https://gcdn.utkonos.ru/resample/900x900q90/images/photo/3331/3331176H.jpg',
                price: '600',
                inStock: 20,
                rating: 4
            },
            {
                id: 7,
                title: 'Порошок Persil',
                image: 'https://gcdn.utkonos.ru/resample/900x900q90/images/photo/3331/3331176H.jpg',
                price: '600',
                inStock: 20,
                rating: 4
            },
            {
                id: 8,
                title: 'Порошок Persil',
                image: 'https://gcdn.utkonos.ru/resample/900x900q90/images/photo/3331/3331176H.jpg',
                price: '600',
                inStock: 20,
                rating: 4
            },
            {
                id: 9,
                title: 'Порошок Persil',
                image: 'https://gcdn.utkonos.ru/resample/900x900q90/images/photo/3331/3331176H.jpg',
                price: '600',
                inStock: 20,
                rating: 4
            },
            {
                id: 10,
                title: 'Порошок Persil',
                image: 'https://gcdn.utkonos.ru/resample/900x900q90/images/photo/3331/3331176H.jpg',
                price: '600',
                inStock: 20,
                rating: 4
            },
            {
                id: 11,
                title: 'Порошок Persil',
                image: 'https://gcdn.utkonos.ru/resample/900x900q90/images/photo/3331/3331176H.jpg',
                price: '600',
                inStock: 20,
                rating: 4
            },
            {
                id: 12,
                title: 'Порошок Persil',
                image: 'https://gcdn.utkonos.ru/resample/900x900q90/images/photo/3331/3331176H.jpg',
                price: '600',
                inStock: 20,
                rating: 4
            },
            {
                id: 13,
                title: 'Порошок Persil',
                image: 'https://gcdn.utkonos.ru/resample/900x900q90/images/photo/3331/3331176H.jpg',
                price: '600',
                inStock: 20,
                rating: 0
            },            {
                id: 14,
                title: 'Порошок Persil',
                image: 'https://gcdn.utkonos.ru/resample/900x900q90/images/photo/3331/3331176H.jpg',
                price: '600',
                inStock: 20,
                rating: 4
            },
            {
                id: 15,
                title: 'Порошок Persil',
                image: 'https://gcdn.utkonos.ru/resample/900x900q90/images/photo/3331/3331176H.jpg',
                price: '600',
                inStock: 20,
                rating: 5
            },
            {
                id: 16,
                title: 'Порошок Persil',
                image: 'https://gcdn.utkonos.ru/resample/900x900q90/images/photo/3331/3331176H.jpg',
                price: '600',
                inStock: 20,
                rating: 1
            },
            {
                id: 17,
                title: 'Порошок Persil',
                image: 'https://gcdn.utkonos.ru/resample/900x900q90/images/photo/3331/3331176H.jpg',
                price: '600',
                inStock: 20,
                rating: 1
            },
            {
                id: 18,
                title: 'Порошок Persil',
                image: 'https://gcdn.utkonos.ru/resample/900x900q90/images/photo/3331/3331176H.jpg',
                price: '600',
                inStock: 20,
                rating: 0
            },
            {
                id: 19,
                title: 'Порошок Persil',
                image: 'https://gcdn.utkonos.ru/resample/900x900q90/images/photo/3331/3331176H.jpg',
                price: '600',
                inStock: 20,
                rating: 3
            },
            {
                id: 20,
                title: 'Порошок Persil',
                image: 'https://gcdn.utkonos.ru/resample/900x900q90/images/photo/3331/3331176H.jpg',
                price: '600',
                inStock: 20,
                rating: 2
            },

        ],
        productsInCart: []
    },
    mutations: {
        ADD_PRODUCT_TO_CART(state, product) {
            if (product.inStock === 0) return;
            const foundProductIndex = state.productsInCart.findIndex(prod => prod.id === product.id);
            if (foundProductIndex === -1) {
                if (product.amount <= product.inStock && product.amount >= 0) {
                    state.productsInCart.push(product);
                }
            } else {
                const newAmountOfProductsInCart = state.productsInCart[foundProductIndex].amount += product.amount;
                if (newAmountOfProductsInCart > product.inStock) {
                    state.productsInCart[foundProductIndex].amount = product.inStock;
                } else if (newAmountOfProductsInCart < 0 ) {
                    state.productsInCart[foundProductIndex].amount = 0
                } else {
                    state.productsInCart[foundProductIndex].amount = newAmountOfProductsInCart;
                }
            }
        }
    },
    actions: {
        addProductToCart(store, product) {
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
        },
        products(state) {
            return state.products;
        }
    },
    modules: {}
});
