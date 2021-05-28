<template>
  <div id="app">
	  <div class="navbar">
		  <div class="left"></div>
		  <div class="right">
			  <div class="btn cart"></div>
		  </div>
	  </div>
  </div>
</template>

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
		justify-content: stretch;
		width: 100%;
	}

	.btn {
		cursor: pointer;
	}

	.navbar {
		height: 50px;
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
		width: 50px;
		background-size: 25px;
	}
</style>
