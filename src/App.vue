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
	  <div class="content">
		  <div class="content-inner">
			  <div class="section">
				  <div class="section-title">Популярные товары</div>
				  <div class="section-content">
					  <product-card
						  class="product"
						  v-for="product in popularProducts.slice(0, dataPortionSizes.popular)"
						  :key="`product-${ product.id }`"
						  :product="product"
					  ></product-card>
				  </div>
				  <div
					  class="btn show-more"
					  @click="dataPortionSizes.popular += dataPortionSizes.popular"
					  v-show="dataPortionSizes.popular < popularProducts.length"
				  >Показать еще</div>
			  </div>
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
			dataPortionSizes: {
				popular: 12
			}
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
		display: flex;
		padding: 20px;
		flex-direction: column;
		overflow: auto;
	}

	.content-inner {
		margin: 0 auto;
		width: 750px;
	}

	.section-title {
		font-size: 25px;
		font-weight: bold;
		margin: 0 0 30px 0;
	}

	.section-content {
		display: flex;
		flex-wrap: wrap;
		margin: 0 0 20px 0;
	}

	.product-card {
		margin: 0 10px 10px 0;
	}

	.product-card:nth-child(4n) {
		margin: 0;
	}

	.show-more {
		padding: 20px 40px;
		width: max-content;
		color: #5287ff;
		border: 1px solid #5287ff;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
	}
</style>
