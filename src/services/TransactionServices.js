import axios from "axios";
export const getBalance = async (id) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/api/balance/'+id,
        headers: { }
    };

    return axios.request(config)
}