<template>
	<div class="product-card" :class="{ 'not-in-stock': !product.inStock}">
		<div class="not-in-stock-inner">Нет в наличии</div>
		<div class="image" :style="{ backgroundImage: `url(${ product.image })` }"></div>
		<div class="description">
			<div class="title">{{ product.title }}</div>
			<div class="price">{{ product.price }} руб.</div>
			<div class="number-of-products">
				<div class="btn change-number-of-products" @click="numberOfProducts -= 1">-</div>
				<input type="text" v-model.number.lazy="numberOfProducts" class="number-of-products-value">
				<div class="btn change-number-of-products" @click="numberOfProducts += 1">+</div>
			</div>
			<div class="btn add-to-cart" @click="addProductToCart">Добавить в корзину</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['product'],
	name: "ProductCard",
	data() {
		return {
			numberOfProducts: 0
		};
	},
	methods: {
		addProductToCart() {
			if (this.numberOfProducts !== 0) {
				const product = { ...this.product, amount: this.numberOfProducts };
				this.$store.dispatch('addProductToCart', product);
			}
		}
	},
	watch: {
		numberOfProducts(val) {
			if (val < 0) {
				this.numberOfProducts = 0;
			} else if (val > this.product.inStock) {
				this.numberOfProducts = this.product.inStock;
			}
		}
	}
}
</script>

<style scoped>
	.product-card {
		position: relative;
		width: 180px;
		height: 350px;
		background: white;
		border-radius: 6px;
		border: 1px solid lightgray;
		display: flex;
		flex-direction: column;
		transition: 0.3s ease;
	}

	.not-in-stock {
		filter: grayscale(100%);
	}

	.not-in-stock-inner {
		visibility: hidden;
		display: flex;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		justify-content: center;
		align-items: center;
		color: white;
		font-weight: bold;
		font-size: 16px;
		background-color: rgba(0, 0, 0, 0.5);
	}

	.product-card.not-in-stock:hover > .not-in-stock-inner {
		visibility: visible;
	}

	.image {
		height: 50%;
		background-position: center;
		background-size: contain;
		margin: 10px 0 0 0;
	}

	.description {
		padding: 10px;
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		justify-content: space-between;
		align-items: center;
	}

	.description > * {
		display: flex;
		justify-content: center;
	}

	.title {
		font-weight: bold;
		height: 40px;
	}

	.price {
		font-weight: bold;
	}

	.number-of-products {
		display: flex;
	}

	.number-of-products-value {
		width: 70px;
		height: 20px;
		text-align: center;
	}

	.change-number-of-products {
		border: 1px solid black;
		height: 20px;
		width: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}

	.change-number-of-products:first-child {
		border-right: 0;
	}

	.change-number-of-products:last-child {
		border-left: 0;
	}

	.add-to-cart {
		background-color: #5287ff;
		height: 40px;
		width: 100%;
		color: white;
		font-size: 14px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: bold;
		transition: 0.1s ease;
	}

	.add-to-cart:hover {
		background-color: #85acff;
	}
</style>