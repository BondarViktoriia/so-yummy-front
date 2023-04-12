import axios from 'axios';

axios.defaults.baseURL = 'https://so-yummy-7n94.onrender.com/api';

export const getRecipeById = async id => {
  try {
    const { data } = await axios.get(`/recipes/recipe/${id}`);
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const fetchAllCategories = async () => {
  try {
    const { data } = await axios.get('/recipes/recipe/category-list');
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const getRecipeByCategory = async (
  categoryName,
  limit = 8,
  page = 1
) => {
  try {
    const { data } = await axios.get(
      `/recipes/recipe/categories/${categoryName}?limit=${limit}&page=${page}`
    );
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const getMainPage = async () => {
  try {
    const { data } = await axios.get('/recipes/main');
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const getFavorite = async () => {
  try {
    const response = await axios.get('/favorite');
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const addToFavorite = async id => {
  try {
    const response = await axios.put('/favorite/', { id });
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteFromFavorite = async id => {
  try {
    const response = await axios.patch(`/favotite/${id}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getOwnRecipes = async (page, per_page) => {
  try {
    // if (page && per_page) {
    const { data } = await axios.get(
      `/ownRecipes?page=${page}&per_page=${per_page}`
    );
    // console.log(data.data);
    return data.data;
    // }
    // const response = await axios.post('/ownRecipes');
    // return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const addOwnRecipeApi = async body => {
  console.log('addOwnRecipeApi   body:', body);
  try {
    const { data } = await axios.post('/ownRecipes', body);

    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteOwnRecipe = async id => {
  try {
    const response = await axios.delete(`/own-recipes/${id}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getPopularRecipes = async () => {
  try {
    const response = await axios.get('popular-recipe');
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getAllIngredientsAPI = () => {
  return axios.get('/ingredients/list').then(({ data }) => {
    return data;
  });
};

export const getAllCategoriesApi = async () => {
  try {
    const response = await axios.delete('recipes/recipe/category-list"');
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
