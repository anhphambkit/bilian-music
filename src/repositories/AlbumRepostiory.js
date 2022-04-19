import axiosApi from '../plugins/axios';
import { APIs } from "@/configs/APIs";
const ALBUM_APIS = APIs.ALBUM;

export default () => ({
	/**
     * Get the top albums
     * @param {*} limit 
     * @param {*} offset 
     * @param {*} range 
     * @returns 
     */
    async top(limit = 10, offset = 0, range = "month") {
        try {
            const { data } = await axiosApi.get(ALBUM_APIS.TOP, {
                params: {
                    limit,
                    offset,
                    range
                }
            });
            return data
        }
        catch (error) {
            console.log("Error API", error)
        }
    },
    
    /**
     * Get detail of album by albumId
     * @param {*} id 
     * @returns 
     */
     async detail(id) {
        let apiUrl = ALBUM_APIS.DETAIL.replace("{id}", id)
        try {
            const { data } = await axiosApi.get(apiUrl);
            return data
        }
        catch (error) {
            console.log("Error API", error)
        }
    },

    /**
     * Get the tracks of album by albumId
     * @param {*} id 
     * @returns 
     */
    async tracks(id) {
        let apiUrl = ALBUM_APIS.TRACKS.replace("{id}", id)
        try {
            const { data } = await axiosApi.get(apiUrl);
            return data
        }
        catch (error) {
            console.log("Error API", error)
        }
    }
});