<template>
	<b-overlay :show="loading" rounded="sm">
		<b-container fluid class="page page__home home">
			<b-container class="p-0">
				<div class="page__filter-wrapper">
					<h1 class="page__title">TOP 20 ALBUMS / </h1>
					<b-form-select
						v-model="filterRange"
						:options="ranges"
						class="page__select"
						value-field="value"
						text-field="name"
					></b-form-select>
				</div>
				<b-row>
					<b-col
						class="col-lg-4 col-md-6 col-sm-12 mb-4"
						v-for="(album, index) in top3Albums"
						:key="index"
					>
						<TopAlbumCard
							:order="index + 1"
							:discCount="album.discCount"
							:trackCount="album.trackCount"
							:released="
								$_momentMixins_formatDate(
									album.originallyReleased
								)
							"
							:albumId="album.id"
							:albumImage="
								$_imageServerMixin_getUrlByType(
									IMAGE_SUPPORT_TYPES.ALBUM,
									album.id,
									'200x200'
								)
							"
							:albumName="album.name"
							:artistId="album.contributingArtists.primaryArtist"
							:artistImage="
								$_imageServerMixin_getUrlByType(
									IMAGE_SUPPORT_TYPES.ARTIST,
									album.contributingArtists.primaryArtist,
									'70x70'
								)
							"
							:artistName="album.artistName"
							:loading="loading"
						/>
					</b-col>
				</b-row>
				<b-row>
					<b-col
						class="col-lg-12 col-md-12 col-sm-12 mb-2"
						v-for="(album, index) in topRemainingAlbums"
						:key="index"
					>
						<AlbumCard
							:order="index + 4"
							:discCount="album.discCount"
							:trackCount="album.trackCount"
							:released="
								$_momentMixins_formatDate(
									album.originallyReleased
								)
							"
							:albumImage="
								$_imageServerMixin_getUrlByType(
									IMAGE_SUPPORT_TYPES.ALBUM,
									album.id,
									'200x200'
								)
							"
							:albumId="album.id"
							:albumName="album.name"
							:artistImage="
								$_imageServerMixin_getUrlByType(
									IMAGE_SUPPORT_TYPES.ARTIST,
									album.contributingArtists.primaryArtist,
									'70x70'
								)
							"
							:artistName="album.artistName"
							:artistId="album.contributingArtists.primaryArtist"
						/>
					</b-col>
				</b-row>
			</b-container>
		</b-container>
	</b-overlay>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import ImageServerMixin from "@/mixins/ImageServerMixin";
import MomentMixins from "@/mixins/MomentMixins";
import TopAlbumCard from "@/components/TopAlbumCard";
import AlbumCard from "@/components/AlbumCard";
export default {
	name: "TopAlbums",
	components: {
		TopAlbumCard,
		AlbumCard,
	},
	mixins: [ImageServerMixin, MomentMixins],
	data() {
		return {
			limit: 20,
			loading: true,
			filterRange: 'day',
			ranges: [
				{ value: 'day', name: 'Day' },
				{ value: 'week', name: 'Week' },
				{ value: 'month', name: 'Month' },
				{ value: 'year', name: 'Year' },
				{ value: 'life', name: 'Life' },
			]
		};
	},
	watch: {
		async filterRange() {
			await this.fetchTopAlbum();
		}
	},
	computed: {
		...mapGetters(["topAlbums"]),
		top3Albums() {
			return this.topAlbums.slice(0, 3);
		},
		topRemainingAlbums() {
			return this.topAlbums.slice(3, this.topAlbums.length);
		},
	},
	async mounted() {
		await this.fetchTopAlbum();
	},
	methods: {
		...mapActions({
			getTopAlbums: "getTopAlbums"
		}),
		async fetchTopAlbum() {
			this.loading = true
			await this.getTopAlbums({
				limit: this.limit,
				offset: 0, 
				filterRange: this.filterRange
			})
			this.loading = false
		},
	},
};
</script>
<style lang="scss" scoped>
.page {
	&__filter-wrapper {
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 40px;
	}
	&__title {
		margin-bottom: 0;
		margin-right: 10px;
	}
	&__select {
		width: 100%;
		max-width: 200px;
	}
}
</style>