const IMAGE_API_ENDPOINT = `${process.env.VUE_APP_API_ENDPOINT}/imageserver/v2`;
import { IMAGE_SUPPORT_TYPES } from "../configs/Settings";
export default {
	name: "ImageServerMixin",
	mixins: [],
	data() {
		return {
			IMAGE_SUPPORT_TYPES
		};
	},
	computed: {},
	watch: {},
	created() {},
	mounted() {},
	methods: {
		/**
		 * Get the image URL
		 * @param {*} type
		 * @param {*} id
		 * @param {*} size
		 * @param {*} extension
		 * @returns
		 */
         $_imageServerMixin_getUrlByType(type, id, size, extension = "jpg") {
			switch (type) {
				case IMAGE_SUPPORT_TYPES.ARTIST: {
					return `${IMAGE_API_ENDPOINT}/artists/${id}/images/${size}.${extension}`;
				}

				case IMAGE_SUPPORT_TYPES.TRACK:
				case IMAGE_SUPPORT_TYPES.ALBUM: {
					return `${IMAGE_API_ENDPOINT}/albums/${id}/images/${size}.${extension}`;
				}

				case IMAGE_SUPPORT_TYPES.PLAYLIST: {
					return `${IMAGE_API_ENDPOINT}/playlists/${id}/artists/images/${size}.${extension}`;
				}

				case IMAGE_SUPPORT_TYPES.GENRE: {
					return `${IMAGE_API_ENDPOINT}/images/${id}/${size}.${extension}`;
				}

				case IMAGE_SUPPORT_TYPES.STATION: {
					return `${IMAGE_API_ENDPOINT}/stations/${id}/images/${size}.${extension}`;
				}
			}
		},
	},
};
