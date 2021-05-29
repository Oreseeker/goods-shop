<template>
  <div id="app">
	  <div class="navbar">
		  <div class="left"></div>
		  <div class="right">
			  <div class="btn cart">
				  <div class="number-of-goods">{{ numberOfGoods }}</div>
			  </div>
		  </div>
	  </div>
	  <div class="content">
		  <product-card
			  class="product"
			  v-for="product in products"
			  :key="`product-${ product.id }`"
			  :product="product"
		  ></product-card>
	  </div>
  </div>
</template>

<script>
import ProductCard from "@/components/Products/ProductCard";
export default {
	components: {ProductCard},
	data() {
		return {
			products: [
				{
					id: 0,
					title: 'Порошок Persil',
					image: 'https://gcdn.utkonos.ru/resample/900x900q90/images/photo/3331/3331176H.jpg',
					price: '600'
				},
				{
					id: 1,
					title: 'Порошок Persil',
					image: 'https://gcdn.utkonos.ru/resample/900x900q90/images/photo/3331/3331176H.jpg',
					price: '600'
				},
				{
					id: 2,
					title: 'Порошок Persil',
					image: 'https://gcdn.utkonos.ru/resample/900x900q90/images/photo/3331/3331176H.jpg',
					price: '600'
				},
				{
					id: 3,
					title: 'Порошок Persil',
					image: 'https://gcdn.utkonos.ru/resample/900x900q90/images/photo/3331/3331176H.jpg',
					price: '600'
				},
				{
					id: 4,
					title: 'Порошок Persil',
					image: 'https://gcdn.utkonos.ru/resample/900x900q90/images/photo/3331/3331176H.jpg',
					price: '600'
				},
			]
		};
	},
	computed: {
		numberOfGoods() {
			return this.$store.getters.numOfGoods;
		}
	}
}
</script>

<style>
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
		height: 20px;
		width: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 7px;
		right: 7px;
	}

	.content {
		flex-grow: 1;
		overflow: auto;
		display: flex;
		flex-wrap: wrap;
		padding: 20px;
	}

	.product-card {
		margin: 0 10px 10px 0;
	}
</style>
