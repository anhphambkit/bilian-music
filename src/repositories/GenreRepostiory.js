import axiosApi from '../plugins/axios';
import { APIs } from "@/configs/APIs";
const GENRE_APIS = APIs.GENRE;

export default () => ({
	/**
     * Get the detail of genre
     * @param {*} ids 
     * @returns 
     */
    async detail(ids) {
        let apiUrl = GENRE_APIS.DETAIL.replace("{ids}", ids)
        try {
            const { data } = await axiosApi.get(apiUrl);
            return data
        }
        catch (error) {
            console.log("Error API", error)
        }
    },
});