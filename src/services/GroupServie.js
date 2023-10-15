import axios from "axios";
import urlApi from "../api-constrains";

export const getGroups = async (id) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: urlApi+'/api/usergroup/'+id,
        headers: { }
    };

    return axios.request(config)
}