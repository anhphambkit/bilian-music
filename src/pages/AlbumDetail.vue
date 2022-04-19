<template>
	<b-container fluid class="album page__album">
		<b-container class="p-0">
			<div class="album__nav">
				<router-link :to="'/'"> Home </router-link>
				- Album Detail
			</div>
			<b-row class="album__wrapper" v-if="album">
				<b-col
					cols="12"
					class="
						album__player-wrapper
						col-lg-5 col-md-12 col-sm-12
						mb-4
					"
				>
					<Player :playlists="tracks" />
				</b-col>
				<b-col
					cols="12"
					class="album__info-wrapper col-lg-7 col-md-12 col-sm-12"
				>
					<div class="album__content">
						<div class="album__info">
							<b-img-lazy
								thumbnail
								rounded
								:src="
									$_imageServerMixin_getUrlByType(
										IMAGE_SUPPORT_TYPES.ALBUM,
										album.id,
										'200x200'
									)
								"
								class="album__image"
								:alt="album.name"
							/>
							<div
								class="album__name"
								v-b-tooltip.hover
								:title="album.name"
							>
								{{ album.name }}
							</div>
						</div>
						<div class="album__info">
							<div class="album__info--key">Artist:</div>
							<div class="album__info--name artist">
								{{ album.artistName }}
							</div>
						</div>
						<div class="album__info">
							<div class="album__info--key">Genres:</div>
							<div class="album__info--name genre">
								<b-badge
									:variant="VARIANTS[index % VARIANTS.length]"
									v-for="(genre, index) in genres"
									:key="index"
								>
									{{ genre.name }}
								</b-badge>
							</div>
						</div>
						<div class="album__info">
							<div class="album__info--key">Total tracks:</div>
							<div class="album__info--name total-tracks">
								{{ album.trackCount }}
							</div>
						</div>
						<div class="album__info">
							<div class="album__info--key">Total discs:</div>
							<div class="album__info--name total-discs">
								{{ album.discCount }}
							</div>
						</div>
						<div class="album__info">
							<div class="album__info--key">Released:</div>
							<div class="album__info--name released">
								{{
									$_momentMixins_formatDate(
										album.originallyReleased
									)
								}}
							</div>
						</div>
					</div>
				</b-col>
			</b-row>
		</b-container>
	</b-container>
</template>

<script>
import RepositoryFactory from "@/repositories/RepositoryFactory";
import ImageServerMixin from "@/mixins/ImageServerMixin";
import MomentMixins from "@/mixins/MomentMixins";
import Player from "@/components/Player";
export default {
	name: "AlbumDetail",
	components: {
		Player,
	},
	mixins: [ImageServerMixin, MomentMixins],
	data() {
		return {
			id: this.$route.params.id,
			album: null,
			tracks: [],
			genres: null,
			VARIANTS: [
				"success",
				"primary",
				"secondary",
				"danger",
				"warning",
				"info",
				"light",
				"dark",
			],
		};
	},
	async mounted() {
		await this.fetchAlbumDetail();
		await this.fetchTracksOfAlbum();
	},
	methods: {
		/**
		 * fetch album detail by albumId
		 */
		async fetchAlbumDetail() {
			let response = await RepositoryFactory.album().detail(this.id);
			this.album = response.albums[0];
			await this.fetchGenreDetail();
		},
		/**
		 * fetch tracks by albumId
		 */
		async fetchTracksOfAlbum() {
			let response = await RepositoryFactory.album().tracks(this.id);
			this.tracks = response.tracks;
		},
		/**
		 * get detail genres of album
		 */
		async fetchGenreDetail() {
			let response = await RepositoryFactory.genre().detail(
				this.album.links.genres.ids.join(",")
			);
			this.genres = response.genres;
		},
	},
};
</script>

<style lang="scss" scoped>
.album {
	background-image: url("../assets/media/bg-detail.jpg");
	background-repeat: no-repeat;
	background-position: center;
	    background-size: cover;
	    padding: 15px 0;
    min-height: 100vh;
	color: white;
	&__nav {
		font-size: 30px;
		margin-bottom: 40px;
	}
	&__info {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
		&--key {
			color: #a2a2a9;
			margin-right: 5px;
		}
		&--name {
			font-weight: 500;
		}
	}
	&__content {
		padding: 20px;
	}
	&__image {
		width: 100px;
		height: 100px;
		margin-right: 10px;

		@media screen and (max-width: 992px) {
			width: 60px;
			height: 60px;
		}
	}
	&__name {
		font-size: 40px;
		font-weight: bold;
		display: -webkit-box !important;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: normal;
		word-break: break-word;
		@media screen and (max-width: 992px) {
			font-size: 20px;
		}
	}
	&__info-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
}
</style>