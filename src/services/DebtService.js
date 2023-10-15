import axios from "axios";
import urlApi from "../api-constrains";

export const createDebt = async (amount, id,group) => {
    const data = {
      amount: amount,
      debtors: [
        {
            id: id,
            amount: amount
        }
      ],
      group: group
    };
    console.log(data)
  
    const config = {
      method: 'post',
      url: `${urlApi}/api/createdebt`,
      data: data, // Set the request body here
      headers: {
        'Content-Type': 'application/json', // Specify the content type if needed
      },
    };
  
    try {
      const response = await axios(config);
      return response.data;
    } catch (error) {
      // Handle any errors here
      console.error('Error:', error);
      throw error;
    }
  };


  export const getGroupDeb = async (id) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: urlApi+'/api/activedebt/'+id,
        headers: { }
    };

    return axios.request(config)
}