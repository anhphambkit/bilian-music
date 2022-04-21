<template>
	<div class="player">
		<b-skeleton-wrapper
			:loading="skeletonMixin_loading"
			class="skeleton-loading player-loading"
		>
			<template #loading>
				<div class="skeleton-loading__partial player__over-view-wrapper">
					<b-skeleton-img></b-skeleton-img>
					<b-skeleton width="80%" class="mt-2 mb-2"></b-skeleton>
					<b-skeleton width="90%" class="mt-2 mb-2"></b-skeleton>
				</div>
				<div class="skeleton-loading__partial player__controls">
					<b-skeleton width="98%" class="mt-2 mb-4"></b-skeleton>
					<b-skeleton width="85%" class="mb-2"></b-skeleton>
					<b-skeleton width="55%" class="mt-2 mb-2"></b-skeleton>
					<b-skeleton width="70%" class="mt-2 mb-2"></b-skeleton>
				</div>
			</template>
			<slot>
				<div class="player__over-view-wrapper" v-if="playingTrack">
					<div class="player__image-wrapper">
						<b-img
							@error="$_imageMixins_loadImageError"
							:src="$_imageMixins_loadImageSrc($_imageServerMixin_getUrlByType(
									IMAGE_SUPPORT_TYPES.TRACK,
									playingTrack.albumId,
									'300x300'
								))"
							alt=""
							class="player__img"
						/>
					</div>
					<div class="player__info-wrapper">
						<div
							class="player__info name"
							v-b-tooltip.hover
							:title="playingTrack.name"
						>
							{{ playingTrack.name }}
						</div>
						<div
							@click="$_navigatorMixin_goToArtistDetail(playingTrack.artistId)"
							class="player__info artist"
						>
							{{ playingTrack.artistName }}
						</div>
					</div>
					<transition name="slideInUp">
						<div class="player__list-wrapper" v-show="showPlaylist">
							<div class="player__list">
								<div
									class="player__track"
									:class="`${index === playingIndex ? 'playing' : ''} track-${index}`"
									v-for="(track, index) in playlists"
									:key="index"
									@click="selectTrack(index)"
								>
									<div class="player__track--order">
										{{ index + 1 }}.
									</div>
									<div class="player__track__info">
										<div class="player__track__name-wrapper">
											<div class="player__track--name">
												{{ track.name }}
											</div>
											<div
												class="player__track--artist"
											>
												{{ track.artistName }}
											</div>
										</div>
										<div class="player__track--duration">
											{{
												formatStreamTime(
													track.playbackSeconds
												)
											}}
										</div>
									</div>
								</div>
							</div>
						</div>
					</transition>
				</div>
				<div class="player__actions">
					<div
						class="player__action previous"
						@click="playPreviousTrack"
					>
						<b-icon-skip-start-fill
							class="player__action--icon previous"
							:class="{ disabled: !playingIndex }"
						></b-icon-skip-start-fill>
					</div>
					<div
						class="player__action list"
						@click="toggleShowPlaylist"
					>
						<b-icon-music-note-list
							class="player__action--icon list"
							:class="{ active: showPlaylist }"
						></b-icon-music-note-list>
					</div>
					<div class="player__action next" @click="playNextTrack">
						<b-icon-skip-end-fill
							class="player__action--icon previous"
							:class="{
								disabled: playingIndex === playlists.length - 1,
							}"
						></b-icon-skip-end-fill>
					</div>
				</div>
				<div class="player__controls">
					<audio
						controls
						class="player__audio-control w-100"
						ref="audioPlayer"
						v-if="playingTrack"
						:key="playingIndex"
						autoplay
						@ended="playNextTrack"
					>
						<source
							@error="$_imageMixins_loadImageError"
							:src="$_imageMixins_loadImageSrc(playingTrack.previewURL)"
							type="audio/mpeg"
						/>
						Your browser does not support the audio element.
					</audio>
				</div>
			</slot>
		</b-skeleton-wrapper>
	</div>
</template>
<script>
import ImageServerMixin from "@/mixins/ImageServerMixin";
import SkeletonMixin from "@/mixins/SkeletonMixin";
import NavigatorMixins from "@/mixins/NavigatorMixins";
export default {
	name: "Player",
	props: {
		playlists: {
			type: Array,
		},
	},
	mixins: [SkeletonMixin, ImageServerMixin, NavigatorMixins],
	computed: {
		playingTrack() {
			return this.playlists[this.playingIndex];
		},
	},
	data() {
		return {
			playingIndex: 0,
			showPlaylist: false,
		};
	},
	methods: {
		/**
		 * Toggle click show/hide playlist
		 */
		toggleShowPlaylist() {
			this.showPlaylist = !this.showPlaylist;
		},

		/**
		 * Play the previous track
		 */
		playPreviousTrack() {
			if (this.playingIndex > 0) {
				this.playingIndex--;
			}
		},

		/**
		 * Play the next track
		 */
		playNextTrack() {
			if (this.playlists.length - 1 > this.playingIndex) {
				this.playingIndex++;
			}
		},

		/**
		 * Format the stream time to pretty string
		 */
		formatStreamTime(secs, shortFormat = false) {
			let minutes = Math.floor(secs / 60);
			secs = secs % 60;
			const hours = this.pad(Math.floor(minutes / 60));
			minutes = minutes % 60;
			if (hours === "00")
				return `${this.pad(minutes, shortFormat)}:${this.pad(secs)}`;
			return `${hours}:${this.pad(minutes, shortFormat)}:${this.pad(
				secs
			)}`;
		},

		/**
		 * Function to format number
		 */
		pad(num, shortFormat = false) {
			if (shortFormat) {
				return `${num}`.slice(-2);
			}
			return ("0" + num).slice(-2);
		},

		/**
		 * Play the selected track
		 */
		selectTrack(index) {
			this.playingIndex = index;
		},
	},
};
</script>
<style lang="scss" scoped>
@keyframes slideInUp {
	from {
		-webkit-transform: translate3d(0, 100%, 0);
		transform: translate3d(0, 100%, 0);
		visibility: visible;
	}

	to {
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
	}
}
.player {
	// max-width: 300px;
	background: linear-gradient(
		263.22deg,
		rgba(255, 255, 255, 0.1) 32.33%,
		rgba(255, 255, 255, 0.05) 97.29%
	);
	backdrop-filter: blur(60px);
	border-radius: 35px;
	padding: 20px;
	margin: 0 auto;
	&__list-wrapper {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		padding: 20px 0;
		z-index: 2;
		background-color: #020202ed;
		border-radius: 25px;
	}
	&__list {
		height: 100%;
		overflow: auto;
	}
	&__track {
		display: flex;
		justify-content: space-between;
		cursor: pointer;
		padding: 5px 20px;
		border-bottom: 1px solid #313131;
		&:hover {
			background-color: #5d3050;
		}
		&.playing {
			color: #f47e00;
			.player__track--order {
				color: #f47e00;
			}
			.player__track--duration {
				color: #f47e00;
			}
		}
		&--order {
			margin-right: 10px;
			color: #9d9da4;
		}
		&__info {
			display: flex;
			justify-content: space-between;
			width: 100%;
		}
		&--duration {
			color: #a2a2a8;
			font-size: 14px;
		}
		&--name {
			display: -webkit-box !important;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: normal;
			word-break: break-word;
		}
		&--artist {
			font-size: 12px;
			font-style: italic;
			color: #a2a2a8;
		}
	}
	&__over-view-wrapper {
		position: relative;
	}
	&__image-wrapper {
		position: relative;
		width: 100%;
		padding-top: 100%; /* 1:1 Aspect Ratio */
		margin-bottom: 10px;
	}
	&__img {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 25px;
	}
	&__info-wrapper {
		margin-bottom: 20px;
		padding-left: 25px;
		padding-bottom: 10px;
	}
	&__info {
		&.name {
			font-weight: 700;
			font-size: 24px;
			display: -webkit-box !important;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: normal;
			word-break: break-word;
		}
		&.artist {
			color: #9b9ba2;
			font-style: italic;
			cursor: pointer;
		}
	}
	&__actions {
		margin-bottom: 20px;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	&__action {
		cursor: pointer;
		&--icon {
			font-size: 30px;
			color: #d6d0d8;
			&:hover {
				transform: scale(1.1);
			}
			&.active {
				color: #e87513;
			}
			&.disabled {
				opacity: 0.3;
			}
		}
	}
}
</style>