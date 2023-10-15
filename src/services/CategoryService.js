import urlApi from "../api-constrains";
import axios from "axios";

export const getCategories = async () => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: urlApi+'/api/category/',
        headers: { }
    };

    return axios.request(config)
}