import RepositoryFactory from "@/repositories/RepositoryFactory";

const state = {
	artistDetail: null,
    artistTopAlbums: [],
    newAlbums: [],
    artistGenres: null,
};

const getters = {
	artistTopAlbums(state) {
		return state.artistTopAlbums;
	},
	artistDetail(state) {
		return state.artistDetail;
	},
	newAlbums(state) {
		return state.newAlbums;
	},
	artistGenres(state) {
		return state.artistGenres;
	},
};

const mutations = {
	UPDATE_TOP_ALBUMS(state, artistTopAlbums) {
		state.artistTopAlbums = [...artistTopAlbums]
	},
	UPDATE_ARTIST_DETAIL(state, artistDetail) {
		state.artistDetail = artistDetail
	},
	UPDATE_NEW_ALBUMS(state, newAlbums) {
		state.newAlbums = [...newAlbums]
	},
	UPDATE_ARTIST_GENRES(state, artistGenres) {
		state.artistGenres = [...artistGenres]
	},
};

const actions = {
	/**
	 * Update top albums
	 * @param {*} artistTopAlbums 
	 */
	updateartistTopAlbums: ({ commit }, artistTopAlbums) => {
		commit("UPDATE_TOP_ALBUMS", artistTopAlbums);
	},

	/**
	 * Get top albums
	 * @param {*} id 
	 */
	async getArtistTopAlbums({ commit }, id) {
		let response = await RepositoryFactory.artist().topAlbums(id);
		commit("UPDATE_TOP_ALBUMS", response.albums);
	},

	/**
	 * Get artist detail
	 * @param {*} id 
	 */
	 async getArtistDetail({ commit }, id) {
		let response = await RepositoryFactory.artist().detail(id);
		commit("UPDATE_ARTIST_DETAIL", response.artists[0]);
	},
	 
	 /**
	 * Get tracks of album
	 * @param {*} id 
	 */
	async getNewAlbums({ commit }, id) {
		let response = await RepositoryFactory.artist().newReleases(id);
		commit("UPDATE_NEW_ALBUMS", response.albums);
	},

	/**
	 * Get genre of album
	 * @param {*} ids 
	 */
	 async getArtistGenres({ commit }, ids) {
		let response = await RepositoryFactory.genre().detail(ids);
		commit("UPDATE_ARTIST_GENRES", response.genres);
	}
};

export default {
	state,
	getters,
	mutations,
	actions
};
