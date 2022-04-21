import { INVALID_ID } from"@/configs/Settings"
export default {
    name: 'NavigatorMixins',
    mixins: [],
    props: {},
    data() {
      return {}
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    methods: {
        $_navigatorMixin_goToAlbumDetail(albumId) {
			this.$router.push(`/album/${albumId}`)
		},
		$_navigatorMixin_goToArtistDetail(artistId) {
			if (artistId && artistId !== INVALID_ID) {
				this.$router.push(`/artist/${artistId}`)
			}
		}
    },
}