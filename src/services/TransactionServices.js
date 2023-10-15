import axios from "axios";
import { async } from "q";
export const getBalance = async (id) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/api/balance/'+id,
        headers: { }
    };

    return axios.request(config)
}

export const getUserEgress = async (id) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/api/egressTransactions/'+id,
        headers: { }
    };

    return axios.request(config)
}

export const getUserIngress = async (id) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/api/ingressTransactions/'+id,
        headers: { }
    };

    return axios.request(config)
}