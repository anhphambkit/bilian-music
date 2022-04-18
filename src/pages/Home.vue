<template>
    <b-container fluid class="page__home home">
        <b-container class="p-0">
			<h1 class="page__title mt-4 mb-4">
				TOP 20 ALBUMS
			</h1>
			<b-row>
				<b-col class="col-lg-4 col-md-6 col-sm-12 mb-4" v-for="(album, index) in top3Albums" :key="index">
					<TopAlbumCard
						:order="index + 1"
						:discCount="album.discCount"
						:trackCount="album.discCount"
						:released="$_momentMixins_formatDate(album.originallyReleased)"
						:albumImage="$_imageServerMixin_getUrlByType(
							IMAGE_SUPPORT_TYPES.ALBUM,
							album.id,
							'200x200'
						)"
						:albumName="album.name"
						:artistImage="$_imageServerMixin_getUrlByType(
							IMAGE_SUPPORT_TYPES.ARTIST,
							album.contributingArtists.primaryArtist,
							'70x47'
						)"
						:artistName="album.artistName"
					/>
				</b-col>
			</b-row>
			<b-row>
				<b-col class="col-lg-12 col-md-12 col-sm-12 mb-2" v-for="(album, index) in topRemainingAlbums" :key="index">
					<AlbumCard
						:order="index + 4"
						:discCount="album.discCount"
						:trackCount="album.discCount"
						:released="$_momentMixins_formatDate(album.originallyReleased)"
						:albumImage="$_imageServerMixin_getUrlByType(
							IMAGE_SUPPORT_TYPES.ALBUM,
							album.id,
							'200x200'
						)"
						:albumName="album.name"
						:artistImage="$_imageServerMixin_getUrlByType(
							IMAGE_SUPPORT_TYPES.ARTIST,
							album.contributingArtists.primaryArtist,
							'70x47'
						)"
						:artistName="album.artistName"
					/>
				</b-col>
			</b-row>
		</b-container>
    </b-container>
</template>
<script>
import RepositoryFactory from "@/repositories/RepositoryFactory";
import ImageServerMixin from "@/mixins/ImageServerMixin";
import MomentMixins from "@/mixins/MomentMixins";
import TopAlbumCard from "@/components/TopAlbumCard";
import AlbumCard from "@/components/AlbumCard";
export default {
	name: "Home",
	components: {
		TopAlbumCard,
		AlbumCard
	},
	mixins: [ImageServerMixin, MomentMixins],
	data() {
		return {
			topAlbums: [],
		};
	},
	computed: {
		top3Albums() {
			return this.topAlbums.slice(0, 3)
		},
		topRemainingAlbums() {
			return this.topAlbums.slice(3, this.topAlbums.length)
		}
	},
	async mounted() {
		await this.fetchTopAlbum()
	},
	methods: {
		async fetchTopAlbum() {
			let response = await RepositoryFactory.album().top(20);
			this.topAlbums = response.albums;
		}
	},
};
</script>