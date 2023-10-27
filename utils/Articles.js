import axios from 'axios';
import FormData from 'form-data';


export const getArticles = async () => {
    const jwtToken = localStorage.getItem('token');
    const apikey = 'binar-36'
    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://localhost:9000/api/v1/article/',
        headers: {
            'Authorization': jwtToken,
            'x-api-key': apikey
        }
    };
    try {
        const response = await axios(config);
        return response.data.data; // Mengembalikan data respons
    } catch (error) {
        throw error; // Melempar kesalahan
    }
};

export const getArticleByID = async (id) => {
    try {
      const jwtToken = localStorage.getItem('token');
      const apikey = 'binar-36'
      const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `http://localhost:9000/api/v1/article/id/${id}`,
        headers: {
          'Authorization': jwtToken,
          'x-api-key': apikey,
        }
      };
  
      const response = await axios.request(config);
      return response.data; // Mengembalikan data artikel
    } catch (error) {
      console.error('Error fetching article:', error);
      throw error; // Dilemparkan untuk menangani kesalahan di tempat lain
    }
  };

  export const deleteArticleById = async(id) =>{
    try {
      const jwtToken = localStorage.getItem('token');
      const apikey = 'binar-36'
      const config = {
        method: 'delete',
        maxBodyLength: Infinity,
        url: `http://localhost:9000/api/v1/article/delete/${id}`,
        headers: {
          'Authorization': jwtToken,
          'x-api-key': apikey
        }
      };
      const response = await axios.request(config);
      return response.data; // Mengembalikan data artikel
    } catch (error) {
      console.error('Error fetching article:', error);
      throw error; // Dilemparkan untuk menangani kesalahan di tempat lain
    }
  }
  export const createArticle = (formData) => {
    const token = localStorage.getItem('token');
    return axios.post(`http://localhost:9000/api/v1/article/create`, formData, {
      headers: {
        'Authorization': token,
        'x-api-key': 'binar-36', // Ganti dengan API key yang sesuai
      }
    })
      .then(response => {
        console.log(response.data);
        return response.data; // Kembalikan data respons
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
  }
  
  
  
  
  
  
  
  
  