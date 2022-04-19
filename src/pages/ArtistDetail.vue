<template>
	<b-overlay :show="loading" rounded="sm">
		<b-container fluid class="page artist page__artist">
			<b-container class="p-0">
				<div class="artist__nav">
					<router-link :to="'/'"> Home </router-link>
					- Artist Detail
				</div>
				<div class="artist__overview" v-if="artist">
					<div class="artist__image-wrapper">
						<b-img-lazy
							rounded="circle"
							:src="
								$_imageServerMixin_getUrlByType(
									IMAGE_SUPPORT_TYPES.ARTIST,
									id,
									'200x200'
								)
							"
							class="artist__image"
							:alt="artist.name"
						/>
					</div>
					<div class="artist__info">
						<div class="artist__info-name">{{ artist.name }}</div>
						<div class="artist__info-genre mb-4">
							<b-badge
								:variant="VARIANTS[index % VARIANTS.length]"
								v-for="(genre, index) in genres"
								:key="index"
								class="mr-2"
							>
								{{ genre.name }}
							</b-badge>
						</div>
						<div class="artist__info-bio">
							<div
								class="artist__info-bio--item"
								v-for="(bio, index) in artist.bios"
								:key="index"
							>
								<div class="artist__info-bio--title">
									{{ bio.title }}
								</div>
								<div
									class="artist__info-bio--content"
									v-html="bio.bio"
								></div>
								<div class="artist__info-bio--more-info">
									<div
										class="artist__info-bio--publish-date"
										v-if="bio.publishDate"
									>
										{{
											$_momentMixins_formatDate(
												bio.publishDate
											)
										}}&nbsp;-&nbsp;
									</div>
									<div class="artist__info-bio--author">
										{{ bio.author }}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="artist__section tops">
					<div class="artist__section--title">Top Albums</div>
					<b-row class="artist__section--list">
						<div
							class="col-lg-3 col-sm-6 col-xs-12 artist__item"
							v-for="(album, index) in topAlbums"
							:key="index"
						>
							<AlbumOverviewCard
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
							/>
						</div>
					</b-row>
				</div>
				<div class="artist__section releases">
					<div class="artist__section--title">New Releases</div>
					<b-row class="artist__section--list">
						<div
							class="col-lg-3 col-sm-6 col-xs-12 artist__item"
							v-for="(album, index) in newAlbums"
							:key="index"
						>
							<AlbumOverviewCard
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
							/>
						</div>
					</b-row>
				</div>
			</b-container>
		</b-container>
	</b-overlay>
</template>

<script>
import RepositoryFactory from "@/repositories/RepositoryFactory";
import ImageServerMixin from "@/mixins/ImageServerMixin";
import MomentMixins from "@/mixins/MomentMixins";
import AlbumOverviewCard from "@/components/AlbumOverviewCard";
export default {
	name: "ArtistDetail",
	components: {
		AlbumOverviewCard,
	},
	mixins: [ImageServerMixin, MomentMixins],
	data() {
		return {
			id: this.$route.params.id,
			artist: null,
			topAlbums: [],
			newAlbums: [],
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
			loading: true,
		};
	},
	async mounted() {
		await this.fetchArtistDetail();
		await this.fetchTopAlbums();
		await this.fetchNewReleases();
	},
	methods: {
		/**
		 * fetch artist detail by artistId
		 */
		async fetchArtistDetail() {
			this.loading = true;
			let response = await RepositoryFactory.artist().detail(this.id);
			this.artist = response.artists[0];
			await this.fetchGenreDetail();
		},

		/**
		 * fetch top albums of artist by artistId
		 */
		async fetchTopAlbums() {
			this.loading = true;
			let response = await RepositoryFactory.artist().topAlbums(this.id);
			this.topAlbums = response.albums;
			this.loading = false;
		},

		/**
		 * Fetch new releases of artist by artistId
		 */
		async fetchNewReleases() {
			this.loading = true;
			let response = await RepositoryFactory.artist().newReleases(
				this.id
			);
			this.newAlbums = response.albums;
			this.loading = false;
		},

		/**
		 * get detail genres of artist
		 */
		async fetchGenreDetail() {
			this.loading = true;
			let response = await RepositoryFactory.genre().detail(
				this.artist.links.genres.ids.join(",")
			);
			this.genres = response.genres;
			this.loading = false;
		},
	},
};
</script>

<style lang="scss" scoped>
.artist {
	min-height: 100vh;
	// color: white;
	&__nav {
		font-size: 30px;
		margin-bottom: 40px;
	}
	&__overview {
		display: flex;
		justify-content: center;
		margin-bottom: 30px;
		flex-wrap: wrap;
	}
	&__info {
		padding: 10px;
	}
	&__image-wrapper {
		margin: 0 30px;
	}
	&__image {
		width: 200px;
		height: 200px;
	}
	&__info-name {
		font-size: 40px;
		font-weight: bold;
	}
	&__info-bio {
		&--title {
			font-weight: 600;
			margin-bottom: 5px;
		}
		&--content {
			font-style: italic;
			color: #a2a2a9;
			margin-bottom: 5px;
		}
		&--more-info {
			display: flex;
			align-items: center;
			justify-content: flex-end;
		}
	}
	&__section {
		margin-bottom: 50px;
		&--title {
			font-size: 25px;
			margin-bottom: 20px;
			font-weight: 500;
		}
	}
}
</style>