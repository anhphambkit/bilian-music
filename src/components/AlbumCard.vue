<template>
	<div class="album-card">
		<b-skeleton-wrapper :loading="skeletonMixin_loading" class="skeleton-loading">
			<template #loading>
				<div class="skeleton-loading__partial skeleton-loading__order">
					<b-skeleton width="85%" class="mt-2 mb-2"></b-skeleton>
					<b-skeleton width="80%" class="mt-2 mb-2"></b-skeleton>
					<b-skeleton width="90%" class="mt-2 mb-2"></b-skeleton>
				</div>
				<div class="skeleton-loading__partial skeleton-loading__info">
					<b-skeleton width="85%" class="mt-2 mb-2"></b-skeleton>
					<b-skeleton width="55%" class="mt-2 mb-2"></b-skeleton>
					<b-skeleton width="70%" class="mt-2 mb-2"></b-skeleton>
				</div>
			</template>
			<slot>
				<div class="album-card__order">
					<div class="album-card__info order">
						{{ order }}
					</div>
				</div>
				<div class="album-card__info-wrapper">
					<div class="album-card__main">
						<div
							class="album-card__info album"
						>
							<div class="album__image-wrapper" @click="$_navigatorMixin_goToAlbumDetail(albumId)">
								<b-img
									rounded
									class="album__img"
									:alt="albumName"
									@error="$_imageMixins_loadImageError"
                            		:src="$_imageMixins_loadImageSrc(albumImage)"
								/>
							</div>
							<div
								class="album__name"
								@click="$_navigatorMixin_goToAlbumDetail(albumId)"
								v-b-tooltip.hover
								:title="albumName"
							>
								{{ albumName }}
							</div>
						</div>
					</div>
					<div class="album-card__sub">
						<div class="album-card__info author">
							<div
								@click="$_navigatorMixin_goToArtistDetail(artistId)"
								class="album-card__info--value author-detail"
							>
								<div class="author__image-wrapper">
									<b-img
										rounded="circle"
										class="author__img"
										:alt="artistName"
										@error="$_imageMixins_loadImageError"
                            			:src="$_imageMixins_loadImageSrc(artistImage)"
									/>
								</div>
								<div
									class="author__name"
									v-b-tooltip.hover
									:title="artistName"
								>
									{{ artistName }}
								</div>
							</div>
							<div class="album-card__info--name">Artist</div>
						</div>
						<div class="album-card__info total-tracks">
							<div class="album-card__info--value">
								{{ trackCount }}
							</div>
							<div class="album-card__info--name">
								Total tracks
							</div>
						</div>
						<div class="album-card__info total-disc">
							<div class="album-card__info--value">
								{{ discCount }}
							</div>
							<div class="album-card__info--name">
								Total Discs
							</div>
						</div>
						<div class="album-card__info released">
							<div class="album-card__info--value">
								{{ released }}
							</div>
							<div class="album-card__info--name">Released</div>
						</div>
					</div>
				</div>
			</slot>
		</b-skeleton-wrapper>
	</div>
</template>
<script>
import SkeletonMixin from "@/mixins/SkeletonMixin";
import NavigatorMixins from "@/mixins/NavigatorMixins";
export default {
	name: "AlbumCard",
	mixins: [SkeletonMixin, NavigatorMixins],
	props: {
		order: {
			type: Number,
			default: 1,
		},
		discCount: {
			type: Number,
			default: 0,
		},
		trackCount: {
			type: Number,
			default: 0,
		},
		released: {
			type: String,
			required: true,
		},
		albumId: {
			type: String,
			required: true,
		},
		albumImage: {
			type: String,
			required: true,
		},
		albumName: {
			type: String,
			required: true,
		},
		artistImage: {
			type: String,
			required: true,
		},
		artistName: {
			type: String,
			required: true,
		},
		artistId: {
			type: String,
			required: true,
		},
	},
	data() {
		return {}
	}
};
</script>
<style lang="scss" scoped>
.album-card {
	display: flex;
	background-color: #262626;
	padding: 10px 0;
	border-radius: 5px;
	color: white;
	align-items: center;
	justify-content: space-around;
	transition: all 0.3s ease;
	flex-wrap: wrap;
	&:hover {
		box-shadow: 0px 2px 10px rgb(0, 0, 0);
	}
	&__order {
		width: 5%;
		@media screen and (max-width: 992px) {
			width: 10%;
		}
	}
	&__info-wrapper {
		width: 95%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;

		@media screen and (max-width: 992px) {
			width: 90%;
		}
	}
	&__main {
		display: flex;
		align-items: center;
		width: 50%;
		margin-bottom: 10px;
		@media screen and (max-width: 992px) {
			width: 100%;
		}
	}
	&__sub {
		display: flex;
		align-items: center;
		width: 50%;
		@media screen and (max-width: 992px) {
			width: 100%;
		}
	}
	&__info {
		display: flex;
		align-items: center;
		flex-direction: column;
		width: 20%;
		padding: 0 5px;
		&--value {
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 14px;
			@media screen and (max-width: 992px) {
				font-size: 10px;
			}
		}
		&--name {
			font-size: 10px;
			text-align: center;
			color: #9c9ca2;
			@media screen and (max-width: 992px) {
				font-size: 8px;
			}
		}
		&.order {
			font-size: 30px;
			font-weight: bold;
			padding-left: 10px;
			width: 100%;
			@media screen and (max-width: 992px) {
				font-size: 20px;
			}
		}
		&.album {
			flex-direction: row;
			width: 90%;
			.album__image-wrapper {
				margin-right: 10px;
				cursor: pointer;
			}
			.album__img {
				width: 100px;
				height: 100px;
				@media screen and (max-width: 992px) {
					width: 40px;
					height: 40px;
				}
			}
			.album__name {
				color: #f47e00;
				cursor: pointer;
			}
			@media screen and (max-width: 992px) {
				.album__name {
					font-size: 12px;
				}
			}
		}
		&.author {
			width: 40%;
			.album-card__info--value {
				justify-content: flex-start;
				width: 100%;
				color: white;
			}
			.author__image-wrapper {
				margin-right: 10px;
				cursor: pointer;
				@media screen and (max-width: 992px) {
					margin-right: 5px;
				}
			}
			.author__img {
				width: 30px;
				height: 30px;
				@media screen and (max-width: 992px) {
					width: 20px;
					height: 20px;
				}
			}
			.album-card__info--name {
				text-align: left;
				width: 100%;
			}
			.author__name {
				cursor: pointer;
			}
		}
		&.released {
			padding-right: 10px;
		}
	}
}
</style>