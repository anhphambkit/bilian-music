export const APIs = {
	ALBUM: {
		TOP: `/albums/top`,
		DETAIL: `/albums/{id}`,
		TRACKS: `/albums/{id}/tracks`
	},

	GENRE: {
		DETAIL: `/genres/{ids}`,
	},

	ARTIST: {
		DETAIL: `/artists/{id}`,
		TOP_ALBUMS: `/artists/{id}/albums/top`,
		NEW_RELEASES: `/artists/{id}/albums/new`,
	}
}