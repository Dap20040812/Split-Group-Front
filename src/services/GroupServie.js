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
export const getUserGroups = async (id) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: urlApi+'/api/groupusers/'+id,
        headers: { }
    };

    return axios.request(config)
}
export const createGroups = async (id, name) => {
    const data = {
      userId: id,
      name: name,
    };
  
    const config = {
      method: 'post',
      url: `${urlApi}/api/creategroup`,
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

  export const addUserGroups = async (id, group) => {
    const data = {
      userId: id,
      groupId: group,
    };
  
    const config = {
      method: 'post',
      url: `${urlApi}/api/addusertogroup`,
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