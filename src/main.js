import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.mixin({
    methods: {
    	cutText(text, limit) {
    		if (text.length > limit) {
				return text.slice(0, limit) + '...';
			} else {
    			return text;
			}
		}
	}
});

new Vue({
	router,
	store,
	render: function (h) { return h(App) }
}).$mount('#app')
