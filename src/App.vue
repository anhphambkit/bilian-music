<template>
	<div id="app">
		<!-- <Navbar /> -->
		<router-view class="page-view" id="page-view" />
	</div>
</template>

<script>
export default {
	name: "App",
	components: {},
	mixins: [],
	data() {
		return {};
	},
	async mounted() {},
};
</script>

<style lang="scss" scoped>
::v-deep {
	.page {
		padding-top: 15px;
		padding-bottom: 15px;
		background-color: #17171b;
		color: white;
		min-height: 100vh;
		&__title {
			font-size: 30px;
			margin-bottom: 40px;
		}
		a {
			color: #f57d00;
			&:hover {
				text-decoration: none;
			}
		}
	}
}
</style>