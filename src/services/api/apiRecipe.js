import axios from "axios";

axios.defaults.baseURL = "https://so-yummy-7n94.onrender.com/api";

export const getRecipeById = async id => {
  try {
    const { data } = await axios.get(`/recipes/recipe/${id}`);
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const getRecipeByCategory = async category => {
  try {
    const { data } = await axios.get(`/recipes/recipe/${category}`);
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const getMainPage = async () => {
  try {
    const { data } = await axios.get(`/recipes/main`);
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};