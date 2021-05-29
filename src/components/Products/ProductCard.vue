<template>
	<div class="product-card">
		<div class="image" :style="{ backgroundImage: `url(${ product.image })` }"></div>
	</div>
</template>

<script>
export default {
	props: ['product'],
	name: "ProductCard"
}
</script>

<style scoped>
	.product-card {
		width: 180px;
		height: 350px;
		background: white;
		border-radius: 6px;
		border: 1px solid lightgray;
	}

	.image {
		height: 50%;
		background-position: center;
		background-size: contain;
	}
</style>