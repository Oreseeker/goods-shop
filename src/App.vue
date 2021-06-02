<template>
  <div id="app">
	  <div class="navbar">
		  <div class="left">
			  <div class="logo">THE SHOP</div>
		  </div>
		  <div class="right">
			  <div class="btn cart">
				  <div class="number-of-goods">{{ numberOfProductsInCart }}</div>
			  </div>
		  </div>
	  </div>
	  <div class="content" ref="contentEl">
		  <div class="section-title">Популярные товары</div>
		  <div class="popular">
			  <product-card
				  class="product"
				  v-for="product in popularProducts.slice(0, productsToDisplayPerRow() || 1)"
				  :key="`product-${ product.id }`"
				  :product="product"
			  ></product-card>
		  </div>
	  </div>
  </div>
</template>

<script>
import ProductCard from "@/components/Products/ProductCard";
export default {
	components: { ProductCard },
	data() {
		return {
			product
		};
	},
	computed: {
		products() {
			return this.$store.getters.products;
		},
		popularProducts() {
			return this.products.sort((product1, product2) => {
				return product2.rating - product1.rating;
			});
		},
		numberOfProductsInCart() {
			return this.$store.getters.numberOfProductsInCart;
		},
		productsToDisplayPerRow() {

		}
	}
	methods: {
		productsToDisplayPerRow() {
			const contentElWidth = this.$refs.contentEl.getBoundingClientRect().width;
			const productEl = document.querySelector('.product');
			const productElWidth = productEl.getBoundingClientRect().width;
			const productElRightMargin = Number(window.getComputedStyle(productEl).marginRight.split('px')[0]);
			return Math.floor((contentElWidth - productElWidth) / (productElWidth + productElRightMargin) + 1);
		}
	}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Sigmar+One&display=swap');

	* {
		font-family: Avenir, sans-serif;
		box-sizing: border-box;
	}

	input, select {
		outline: none;
	}

	body {
		height: 100vh;
		width: 100vw;
		display: flex;
		justify-content: stretch;
		margin: 0;
	}

	#app {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.btn {
		cursor: pointer;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	.navbar {
		height: 70px;
		width: 100%;
		background-color: #5287ff;
		display: flex;
		justify-content: space-between;
	}

	.left {
		display: flex;
		align-items: center;
		padding: 0 40px;
	}

	.logo {
		font-size: 30px;
		font-family: 'Sigmar one', cursive;
		color: white;
	}

	.navbar .btn {
		transition-property: background-color;
		transition-duration: 0.3s;
	}

	.navbar .btn:hover {
		background-color: #85acff;
	}

	.cart {
		height: 100%;
		background: url('./assets/cart.svg') no-repeat center;
		width: 70px;
		background-size: 25px;
		position: relative;
	}

	.number-of-goods {
		background: yellow;
		border-radius: 50%;
		height: 23px;
		width: 23px;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 7px;
		right: 7px;
		font-weight: bold;
	}

	.content {
		flex-grow: 1;
		overflow: auto;
		display: flex;
		padding: 20px;
		flex-direction: column;
	}

	.section-title {
		font-size: 25px;
		font-weight: bold;
		margin: 0 0 30px 0;
	}

	.popular {
		flex-grow: 1;
		display: flex;
		flex-wrap: wrap;
	}

	.product-card {
		margin: 0 10px 10px 0;
	}
</style>
