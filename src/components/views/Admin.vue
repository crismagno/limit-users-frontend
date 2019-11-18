<template>
	<div class="wrapper">

		<Header />

		<Menu />

		<router-view />
		
		<Footer />

		<ButtonFooter />

	</div>
</template>

<script>
import Header from "../template/header";
import Menu from "../template/menu";
import Footer from "../template/footer";
import ButtonFooter from "../template/button_footer";

export default {
	components: {
		Header,
		Menu,
		Footer,
		ButtonFooter
	},

	mounted() {

		this.socket = io('http://localhost:3005', 
			{query: `company=${localStorage.getItem('companyId')}`});
			console.log(localStorage.getItem('companyId'))
	},



}
</script>

<style>

</style>
