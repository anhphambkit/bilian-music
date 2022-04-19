<template>
	<div id="app">
		<!-- <Navbar /> -->
		<div class="page">
			<router-view class="page-view" id="page-view" />
		</div>
	</div>
</template>

<script>
export default {
	name: "App",
	components: {
	},
	mixins: [],
	data() {
		return {
		};
	},
	async mounted() {
	},
}
</script>

<style lang="scss" scoped>
.page {
    .page__title {
        font-size: 40px;
        font-weight: bold;
    }
	&::v-deep {
		a {
			color: #f57d00;
			&:hover {
				text-decoration: none;
			}
		}
	}
}
</style>