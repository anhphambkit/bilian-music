import RepositoryFactory from "@/repositories/RepositoryFactory";

const state = {
	topAlbums: [],
	albumDetail: null,
	albumTracks: [],
	albumGenres: [],
};

const getters = {
	topAlbums(state) {
		return state.topAlbums;
	},
	albumDetail(state) {
		return state.albumDetail;
	},
	albumTracks(state) {
		return state.albumTracks;
	},
	albumGenres(state) {
		return state.albumGenres;
	},
};

const mutations = {
	UPDATE_TOP_ALBUMS(state, topAlbums) {
		state.topAlbums = [...topAlbums]
	},
	UPDATE_ALBUM_DETAIL(state, albumDetail) {
		state.albumDetail = albumDetail
	},
	UPDATE_ALBUM_TRACKS(state, albumTracks) {
		state.albumTracks = [...albumTracks]
	},
	UPDATE_GENRES(state, albumGenres) {
		state.albumGenres = [...albumGenres]
	},
};

const actions = {
	/**
	 * Update top albums
	 * @param {*} param0 
	 * @param {*} topAlbums 
	 */
	updateTopAlbums: ({ commit }, topAlbums) => {
		commit("UPDATE_TOP_ALBUMS", topAlbums);
	},

	/**
	 * Get top albums
	 * @param {*} param0 
	 * @param {*} params 
	 */
	async getTopAlbums({ commit }, params) {
		let response = await RepositoryFactory.album().top(params.limit, 0, params.filterRange);
		commit("UPDATE_TOP_ALBUMS", response.albums);
	},

	/**
	 * Get album detail
	 * @param {*} id 
	 */
	 async getAlbumDetail({ commit }, id) {
		let response = await RepositoryFactory.album().detail(id);
		commit("UPDATE_ALBUM_DETAIL", response.albums[0]);
	},
	 
	 /**
	 * Get tracks of album
	 * @param {*} id 
	 */
	async getTracksOfAlbum({ commit }, id) {
		let response = await RepositoryFactory.album().tracks(id);
		commit("UPDATE_ALBUM_TRACKS", response.tracks);
	},

	/**
	 * Get genre of album
	 * @param {*} ids 
	 */
	 async getGenreDetail({ commit }, ids) {
		let response = await RepositoryFactory.genre().detail(ids);
		commit("UPDATE_GENRES", response.genres);
	},
	 
	 /**
	  * Reset data album info (detail, playlist, genre)
	  * @param {*} param0 
	  */
	resetAlbumInfo({ commit }) {
		commit("UPDATE_ALBUM_DETAIL", null);
		commit("UPDATE_ALBUM_TRACKS", []);
		commit("UPDATE_GENRES", []);
	 }
};

export default {
	state,
	getters,
	mutations,
	actions
};
