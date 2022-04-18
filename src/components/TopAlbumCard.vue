<template>
	<div class="top-album-card">
		<slot>
			<div class="top-album-card__sub">
				<div class="top-album-card__info order">#{{ order }}</div>
				<div class="top-album-card__info">
					<div class="top-album-card__info--name">Total tracks</div>
					<div class="top-album-card__info--detail">
						{{ trackCount }}
					</div>
				</div>
				<div class="top-album-card__info">
					<div class="top-album-card__info--name">Total discs</div>
					<div class="top-album-card__info--detail">
						{{ discCount }}
					</div>
				</div>
				<div class="top-album-card__info">
					<div class="top-album-card__info--name">Released</div>
					<div class="top-album-card__info--detail date">
						{{ released }}
					</div>
				</div>
			</div>
			<div class="top-album-card__main">
				<div class="top-album-card__album">
					<div class="top-album-card__album--img-wrapper">
						<b-img-lazy
							rounded
							:src="albumImage"
							:alt="albumName"
							class="top-album-card__album--img"
						/>
					</div>
					<div class="top-album-card__album--name" v-b-tooltip.hover :title="albumName">
						{{ albumName }}
					</div>
				</div>
				<div class="top-album-card__author">
					<div class="top-album-card__author-title">Artist</div>
					<div class="top-album-card__author-info">
						<div class="top-album-card__author-info--img-wrapper">
							<b-img-lazy
								rounded="circle"
								:src="artistImage"
								:alt="artistName"
								class="top-album-card__author-info--img"
							/>
						</div>
						<div class="top-album-card__author-info--name" v-b-tooltip.hover :title="artistName">
							{{ artistName }}
						</div>
					</div>
				</div>
			</div>
		</slot>
	</div>
</template>
<script>
export default {
	name: "TopAlbumCard",
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
	},
};
</script>
<style lang="scss" scoped>
.top-album-card {
	display: flex;
	justify-content: center;
	color: white;
    border-radius: 5px;
	transition: all 0.3s ease;
	&:hover {
		box-shadow: 0px 2px 10px rgb(0,0,0);
	}
	&__sub {
		background-color: #191919;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		justify-content: space-around;
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
	}
	&__main {
		background-color: #262626;
		padding: 20px;
		width: 100%;
		display: flex;
		flex-direction: column;
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
	}
	&__info {
		width: 100%;
		padding: 10px 20px;
		@media screen and (max-width: 992px) {
			padding: 10px 15px;
		}
		&--name {
			color: #626263;
			font-size: 12px;
			@media screen and (max-width: 992px) {
				font-size: 10px;
			}
		}
		&--detail {
			font-size: 20px;
			font-weight: bold;
			@media screen and (max-width: 992px) {
				font-size: 16px;
			}
			&.date {
				font-size: 15px;
				@media screen and (max-width: 992px) {
					font-size: 12px;
				}
			}
		}
		&.order {
			font-size: 40px;
			font-weight: bold;
			border-bottom: 1px solid #c5c0c0b3;
			color: #28a745;
			@media screen and (max-width: 992px) {
				font-size: 30px;
			}
		}
	}
	&__album {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-bottom: 10px;
		&--img-wrapper {
			margin-bottom: 10px;
			cursor: pointer;
		}
		&--img {
			width: 100px;
			height: 100px;
			@media screen and (max-width: 992px) {
				width: 60px;
			height: 60px;
			}
		}
		&--name {
			font-size: 14px;
			text-align: center;
			cursor: pointer;
			display: -webkit-box !important;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: normal;
			word-break: break-word;
			color: #f47e00;
			@media screen and (max-width: 992px) {
				font-size: 12px;
			}
		}
	}
	&__author {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: auto;
	}
	&__author-title {
		font-size: 10px;
		color: #a2a2a9;
		margin-bottom: 5px;
		display: -webkit-box !important;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: normal;
		word-break: break-word;
		@media screen and (max-width: 992px) {
			font-size: 8px;
		}
	}
	&__author-info {
		display: flex;
		align-items: center;
		justify-content: center;
		&--img-wrapper {
			margin-right: 10px;
			cursor: pointer;
		}
		&--img {
			width: 30px;
			height: 30px;
			@media screen and (max-width: 992px) {
				width: 25px;
				height: 25px;
			}
		}
		&--name {
			font-size: 12px;
			cursor: pointer;
			@media screen and (max-width: 992px) {
				font-size: 10px;
			}
		}
	}
}
</style>