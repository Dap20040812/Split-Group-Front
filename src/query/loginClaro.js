import axios from 'axios';
import urlApi from '../api-constrains';

const getUser = async () => {
    
    var data

    const url = `${urlApi}/api/user/3`;

    await axios.get(url)
    .then((response) => {
      // Handle the successful response here
     if(response.data == null){
        const urlget = `${urlApi}/api/user`;
        axios.get(urlget).then((response) => {
            var c = 0
            response.data.map((item) => {
                c = c + 1;
            })
            const urlcreate = `${urlApi}/api/createuser`;
            var requestData = {
                "id": c + 1,
                "name": "Usuario",
                }
            axios.post(urlcreate, requestData).then((response) => {
                var urlgetId = `${urlApi}/api/user/${c + 1}`;
                axios.get(urlgetId).then((response) => {
                    data = response.data;
                }).catch((error) => {
                    // Handle any errors here
                    console.error('Error fetching data:', error);
                });
            }).catch((error) => {
                // Handle any errors here
                console.error('Error fetching data:', error);
            });
        }).catch((error) => {
            // Handle any errors here
            console.error('Error fetching data:', error);
          });
          
     }else{
        data = response.data;
     }
    })
    .catch((error) => {
      // Handle any errors here
      console.error('Error fetching data:', error);
    });
    return data;
}

export default getUser;    