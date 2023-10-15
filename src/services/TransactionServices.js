import axios from "axios";

export const getBalance = async (id) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://35.185.209.25:8080/api/balance/'+id,
        headers: { }
    };

    return axios.request(config)
}

export const getUserEgress = async (id) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://35.185.209.25:8080/api/egressTransactions/'+id,
        headers: { }
    };

    return axios.request(config)
}

export const getUserIngress = async (id) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://35.185.209.25:8080/api/ingressTransactions/'+id,
        headers: { }
    };

    return axios.request(config)
}