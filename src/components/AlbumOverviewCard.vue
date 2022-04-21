<template>
	<div class="album-overview-card">
		<b-skeleton-wrapper
			:loading="skeletonMixin_loading"
			class="skeleton-loading album-overview-card-loading"
		>
			<template #loading>
				<div class="skeleton-loading__partial skeleton-loading__top album-overview-card__top">
					<b-skeleton-img></b-skeleton-img>
				</div>
				<div class="skeleton-loading__partial skeleton-loading__bot album-overview-card__bot">
					<b-skeleton width="85%" class="mb-2"></b-skeleton>
					<b-skeleton width="55%" class="mt-2 mb-2"></b-skeleton>
				</div>
			</template>
			<slot>
				<div
					@click="$_navigatorMixin_goToAlbumDetail(albumId)"
					class="album-overview-card__top"
				>
					<b-img
						rounded
						@error="$_imageMixins_loadImageError"
						:src="$_imageMixins_loadImageSrc(albumImage)"
						:alt="albumName"
						class="album-overview-card__image"
					/>
					<div class="album-overview-card__sub-wrapper">
						<div class="album-overview-card__sub-info track">
							<b-icon-music-note-list></b-icon-music-note-list>
							{{ trackCount }}
						</div>
						<div class="album-overview-card__sub-info">
							<b-icon-disc-fill></b-icon-disc-fill>
							{{ discCount }}
						</div>
					</div>
				</div>
				<div
					class="album-overview-card__bot"
				>
					<div class="album-overview-card__info name" @click="$_navigatorMixin_goToAlbumDetail(albumId)">
						{{ albumName }}
					</div>
					<div class="album-overview-card__info date-released">
						{{ released }}
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
	name: "AlbumOverviewCard",
	mixins: [SkeletonMixin, NavigatorMixins],
	props: {
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
	},
};
</script>
<style lang="scss" scoped>
.album-overview-card {
	display: flex;
	flex-direction: column;
	padding: 10px;
	transition: all 0.3s ease;
	&:hover {
		box-shadow: 0px 2px 10px rgb(0, 0, 0);
	}
	&__top {
		position: relative;
	}
	&__image {
		width: 100%;
		height: auto;
		cursor: pointer;
	}
	&__sub-wrapper {
		position: absolute;
		top: 0;
		left: 0;
		padding: 5px 10px;
		background-color: #232323d4;
		display: flex;
		align-items: center;
		color: white;
	}
	&__sub-info {
		font-size: 12px;
		&.track {
			margin-right: 10px;
		}
	}
	&__bot {
		display: flex;
		flex-direction: column;
		margin-top: 10px;
	}
	&__info {
		&.date-released {
			color: #9c9ca2;
			font-size: 12px;
		}
		&.name {
			cursor: pointer;
		}
	}
}
</style>