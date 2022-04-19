export default {
	name: 'SkeletonMixin',
	mixins: [],
	data() {
        return {
            skeletonMixin_loading: true,
            skeletonMixin_timeLoading: 1, // second
        };
    },
    mounted() {
        setTimeout(() => {
			this.skeletonMixin_loading = false
		}, this.skeletonMixin_timeLoading * 1000)
    },
	methods: {},
}