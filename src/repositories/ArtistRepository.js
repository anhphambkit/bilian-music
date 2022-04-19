import axiosApi from '../plugins/axios';
import { APIs } from "@/configs/APIs";
const ARTIST_APIS = APIs.ARTIST;

export default () => ({
	/**
     * Get the top albums of artist
     * @param {*} id 
     * @param {*} limit 
     * @param {*} offset 
     * @returns 
     */
    async topAlbums(id, limit = 4, offset = 0) {
        let apiUrl = ARTIST_APIS.TOP_ALBUMS.replace("{id}", id)
        try {
            const { data } = await axiosApi.get(apiUrl, {
                params: {
                    limit,
                    offset,
                }
            });
            return data
        }
        catch (error) {
            console.log("Error API", error)
        }
    },

    /**
     * Get the new albums of artist
     * @param {*} id 
     * @param {*} limit 
     * @param {*} offset 
     * @returns 
     */
    async newReleases(id, limit = 4, offset = 0) {
        let apiUrl = ARTIST_APIS.NEW_RELEASES.replace("{id}", id)
        try {
            const { data } = await axiosApi.get(apiUrl, {
                params: {
                    limit,
                    offset,
                }
            });
            return data
        }
        catch (error) {
            console.log("Error API", error)
        }
    },
    
    /**
     * Get detail of artist by id
     * @param {*} id 
     * @returns 
     */
     async detail(id) {
        let apiUrl = ARTIST_APIS.DETAIL.replace("{id}", id)
        try {
            const { data } = await axiosApi.get(apiUrl);
            return data
        }
        catch (error) {
            console.log("Error API", error)
        }
    },
});