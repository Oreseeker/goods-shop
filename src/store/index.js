import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [
            {
                id: 0,
                title: 'Вода питьевая Aqua Minerale негазированная 5 л',
                image: 'https://gcdn.utkonos.ru/resample/900x900q90/images/photo/3044/3044320H.jpg?mtime=5f15b174',
                price: '155',
                discount: 0,
                inStock: 20,
                rating: 3,
                comments: []
            },
            {
                id: 1,
                title: 'Мангал Grillkoff Восток 4 угловых шампура из пищевой нержавеющей стали 350х10х0.5 см',
                image: 'https://gcdn.utkonos.ru/resample/900x900q90/images/photo/3438/3438996H.jpg?mtime=608689c0',
                price: '430',
                discount: 0,
                inStock: 0,
                rating: 5,
                comments: []
            },
            {
                id: 2,
                title: 'Клубника Крым 200 г',
                image: 'https://gcdn.utkonos.ru/resample/900x900q90/images/photo/3393/3393731H.jpg?mtime=60b53d37',
                price: '600',
                discount: 0,
                inStock: 20,
                rating: 0,
                comments: []
            },
            {
                id: 3,
                title: 'Мороженное Lotte кукуруза 75 г',
                image: 'https://gcdn.utkonos.ru/resample/900x900q90/images/photo/3395/3395692H.jpg?mtime=602ea05a',
                price: '600',
                discount: 0,
                inStock: 20,
                rating: 1,
                comments: []
            },
            {
                id: 4,
                title: `Бульон Bool'on куриный охлажденный 500 мл`,
                image: 'https://gcdn.utkonos.ru/resample/900x900q90/images/photo/3442/3442317H.jpg?mtime=608033a7',
                price: '600',
                discount: 0,
                inStock: 20,
                rating: 4,
                comments: []
            },
            {
                id: 5,
                title: 'Яблоки Принц 1.3-1.5кг',
                image: 'https://gcdn.utkonos.ru/resample/500x500q90/images/photo/2016/2016221H.jpg?mtime=608289c2',
                price: '600',
                discount: 0,
                inStock: 20,
                rating: 4,
                comments: []
            },
            {
                id: 6,
                title: 'Чай Greenfield Jasmine Dream зеленый листовой с ароматом жасмина 200 г',
                image: 'https://gcdn.utkonos.ru/resample/900x900q90/images/photo/3310/3310199H.jpg?mtime=5f15b1ba',
                price: '159',
                discount: 0,
                inStock: 20,
                rating: 4,
                comments: []
            },
            {
                id: 7,
                title: 'Форель Волгореченскрыбхоз потрошеная с головой охлажденная 0.7-2.1 кг',
                image: 'https://gcdn.utkonos.ru/resample/900x900q90/images/photo/3410/3410957H.jpg?mtime=5f661dab',
                price: '600',
                discount: 0,
                inStock: 20,
                rating: 4,
                comments: []
            },
            {
                id: 8,
                title: 'Сосиски Велком с сыром 540 г',
                image: 'https://gcdn.utkonos.ru/resample/500x500q90/images/photo/3404/3404132H.jpg?mtime=5f15b378',
                price: '329',
                discount: 0,
                inStock: 20,
                rating: 4,
                comments: []
            },
            {
                id: 9,
                title: `Подарочный набор M&M's & Friends Сладкий подарок со стикером внутри 100 `,
                image: 'https://gcdn.utkonos.ru/resample/500x500q90/images/photo/3421/3421083H.jpg?mtime=601da4cf',
                price: '431',
                discount: 0,
                inStock: 20,
                rating: 4,
                comments: []
            },
            {
                id: 10,
                title: 'Шашлык из свинины Слово Мясника охлажденный 1.7-2.1 кг',
                image: 'https://gcdn.utkonos.ru/resample/500x500q90/images/photo/2016/2016134H.jpg?mtime=60828986',
                price: '600',
                discount: 0,
                inStock: 20,
                rating: 4,
                comments: []
            },
            {
                id: 11,
                title: 'Напиток сокосодержащий Aqua Minerale с соком Лимон негазированный 1.5 л',
                image: 'https://gcdn.utkonos.ru/resample/500x500q90/images/photo/3400/3400182H.jpg?mtime=604df37e',
                price: '89',
                discount: 0,
                inStock: 20,
                rating: 4,
                comments: []
            },
            {
                id: 12,
                title: 'Бумажные полотенца Soffione Maxi 2-слойные 2 pулона',
                image: 'https://gcdn.utkonos.ru/resample/500x500q90/images/photo/3375/3375013H.jpg?mtime=5f15b2b9',
                price: '600',
                discount: 0,
                inStock: 20,
                rating: 4,
                comments: []
            },
            {
                id: 13,
                title: 'Чипсы Lays из натурального картофеля со вкусом сметаны и зелени 240г',
                image: 'https://gcdn.utkonos.ru/resample/900x900q90/images/photo/3336/3336584H.jpg?mtime=5f627cfd',
                price: '161',
                discount: 0,
                inStock: 20,
                rating: 0,
                comments: []
            },
            {
                id: 14,
                title: 'Авокадо Fruit & Good Хасс 2 штуки (Колумбия)',
                image: 'https://gcdn.utkonos.ru/resample/900x900q90/images/photo/3417/3417898H.jpg?mtime=60266824',
                price: '600',
                discount: 0,
                inStock: 20,
                rating: 4,
                comments: []
            },
            {
                id: 15,
                title: 'Сыр полутвердый Ламбер Сливочный 55% 0.9-1.2 кг',
                image: 'https://gcdn.utkonos.ru/resample/500x500q90/images/photo/3360/3360920H.jpg?mtime=5fc0d0f1',
                price: '600',
                discount: 0,
                inStock: 20,
                rating: 5,
                comments: []
            },
            {
                id: 16,
                title: 'Спаржа FRUIT&GOOD зеленая 250 г',
                image: 'https://gcdn.utkonos.ru/resample/900x900q90/images/photo/3449/3449322H.jpg?mtime=60b39dab',
                price: '600',
                discount: 0,
                inStock: 20,
                rating: 1,
                comments: []
            },
            {
                id: 17,
                title: 'Дрова SuperGrill сухие березовые 6 кг',
                image: 'https://gcdn.utkonos.ru/resample/500x500q90/images/photo/3415/3415328H.jpg',
                price: '218',
                discount: 0,
                inStock: 20,
                rating: 1,
                comments: []
            },
            {
                id: 18,
                title: 'Крем-мыло жидкое детское Ушастый нянь жидкое с оливковым маслом и экстрактом алоэ вера 300 мл',
                image: 'https://gcdn.utkonos.ru/resample/900x900q90/images/photo/3263/3263798H.jpg?mtime=5f15b19c',
                price: '600',
                discount: 0,
                inStock: 20,
                rating: 0,
                comments: []
            },
            {
                id: 19,
                title: 'Блины Сибирская коллекция с мясом замороженные 720 г',
                image: 'https://gcdn.utkonos.ru/resample/500x500q90/images/photo/3357/3357379H.jpg?mtime=609e3906',
                price: '660',
                discount: 0,
                inStock: 20,
                rating: 3,
                comments: []
            },
            {
                id: 20,
                title: 'Порошок Persil',
                image: 'https://gcdn.utkonos.ru/resample/900x900q90/images/photo/3331/3331176H.jpg',
                price: '600',
                discount: 0,
                inStock: 20,
                rating: 2,
                comments: []
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
