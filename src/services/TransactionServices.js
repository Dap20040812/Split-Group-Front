import axios from "axios";

export const getBalance = async (id) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://07pn30fas5.execute-api.us-east-1.amazonaws.com/prod/api/balance/'+id,
        headers: { }
    };

    return axios.request(config)
}

export const getUserEgress = async (id) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://07pn30fas5.execute-api.us-east-1.amazonaws.com/prod/api/egressTransactions/'+id,
        headers: { }
    };

    return axios.request(config)
}

export const getUserIngress = async (id) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://07pn30fas5.execute-api.us-east-1.amazonaws.com/prod/api/ingressTransactions/'+id,
        headers: { }
    };

    return axios.request(config)
}