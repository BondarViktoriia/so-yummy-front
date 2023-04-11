import axios from 'axios';


axios.defaults.baseURL = 'https://so-yummy-7n94.onrender.com/api';
// axios.defaults.baseURL = "https://localhost:3001/api";




export const getSearchRecipe = async (query, page, options, token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
  
  try {
    const { data } = await axios.get(`/search/${options}?title=${query}`);
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};
