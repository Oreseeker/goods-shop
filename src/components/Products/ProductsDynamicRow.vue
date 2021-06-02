<template>
	<div class="products-dynamic-row">
		<product-card v-for="product in products"></product-card>
	</div>
</template>

<script>
import ProductCard from "@/components/Products/ProductCard";
export default {
	name: "ProductsDynamicRow",
	components: {ProductCard},
	props: ['products'],
	render: function(createElement) {

	}
}
</script>

<style scoped>

</style>