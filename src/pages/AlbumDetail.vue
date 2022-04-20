<template>
	<b-overlay :show="loading" rounded="sm">
		<b-container fluid class="page album page__album">
			<b-container class="p-0">
				<div class="album__nav">
					<router-link :to="'/'"> Home </router-link>
					- Album Detail
				</div>
				<b-row class="album__wrapper" v-if="albumDetail">
					<div
						class="
							album__player-wrapper
							col-lg-5 col-md-12 col-sm-12
							mb-4
						"
					>
						<Player :playlists="albumTracks" />
					</div>
					<div
						class="album__info-wrapper col-lg-7 col-md-12 col-sm-12"
					>
						<div class="album__content">
							<div class="album__info">
								<b-img
									thumbnail
									rounded
									@error="$_imageMixins_loadImageError"
									:src="$_imageMixins_loadImageSrc($_imageServerMixin_getUrlByType(
										IMAGE_SUPPORT_TYPES.ALBUM,
										albumDetail.id,
										'200x200'
									))"
									class="album__image"
									:alt="albumDetail.name"
								/>
								<div
									class="album__name"
									v-b-tooltip.hover
									:title="albumDetail.name"
								>
									{{ albumDetail.name }}
								</div>
							</div>
							<div class="album__info">
								<div class="album__info--key">Artist:</div>
								<router-link
									:to="`/artist/${albumDetail.contributingArtists.primaryArtist}`"
									class="album__info--name artist"
									v-if="albumDetail.contributingArtists.primaryArtist && albumDetail.contributingArtists.primaryArtist !== INVALID_ID"
								>
									{{ albumDetail.artistName }}
								</router-link>
								<div
									class="album__info--name artist"
									v-else
								>
									{{ albumDetail.artistName }}
								</div>
							</div>
							<div class="album__info">
								<div class="album__info--key">Genres:</div>
								<div class="album__info--name genre">
									<b-badge
										:variant="
											VARIANTS[index % VARIANTS.length]
										"
										v-for="(genre, index) in albumGenres"
										:key="index"
										class="mr-2"
									>
										{{ genre.name }}
									</b-badge>
								</div>
							</div>
							<div class="album__info">
								<div class="album__info--key">
									Total tracks:
								</div>
								<div class="album__info--name total-tracks">
									{{ albumDetail.trackCount }}
								</div>
							</div>
							<div class="album__info">
								<div class="album__info--key">Total discs:</div>
								<div class="album__info--name total-discs">
									{{ albumDetail.discCount }}
								</div>
							</div>
							<div class="album__info">
								<div class="album__info--key">Released:</div>
								<div class="album__info--name released">
									{{
										$_momentMixins_formatDate(
											albumDetail.originallyReleased
										)
									}}
								</div>
							</div>
						</div>
					</div>
				</b-row>
			</b-container>
		</b-container>
	</b-overlay>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ImageServerMixin from "@/mixins/ImageServerMixin";
import MomentMixins from "@/mixins/MomentMixins";
import Player from "@/components/Player";
import { VARIANTS, INVALID_ID } from"@/configs/Settings"
export default {
	name: "AlbumDetail",
	components: {
		Player,
	},
	mixins: [ImageServerMixin, MomentMixins],
	data() {
		return {
			id: this.$route.params.id,
			VARIANTS,
			loading: true,
			INVALID_ID
		};
	},
	async mounted() {
		await this.fetchAlbumDetail();
		await this.fetchTracksOfAlbum();
		this.loading = false;
	},
	computed: {
		...mapGetters(["albumDetail", "albumTracks", "albumGenres"])
	},
	beforeDestroy() {
		this.resetAlbumInfo()
	},
	methods: {
		...mapActions({
			getAlbumDetail: "getAlbumDetail",
			getTracksOfAlbum: "getTracksOfAlbum",
			getGenreDetail: "getGenreDetail",
			resetAlbumInfo: "resetAlbumInfo"
		}),

		/**
		 * fetch album detail by albumId
		 */
		async fetchAlbumDetail() {
			await this.getAlbumDetail(this.id);
			await this.fetchGenreDetail();
		},
		
		/**
		 * fetch tracks by albumId
		 */
		async fetchTracksOfAlbum() {
			await this.getTracksOfAlbum(this.id);
		},

		/**
		 * get detail genres of album
		 */
		async fetchGenreDetail() {
			await this.getGenreDetail(
				this.albumDetail.links.genres.ids.join(",")
			);
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