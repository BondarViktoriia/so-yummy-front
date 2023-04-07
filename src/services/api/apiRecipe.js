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
    console.log(error.message)
  }
}

export const addToFavorite = async(id) => {
  try {
    const response = await axios.put('/favorite/', { id });
    return response.data;
  } catch (error) {
    console.log(error.message)
  }
}

export const deleteFromFavorite = async (id) => {
  try {
        const response = await axios.patch(`/favotite/${id}`);
    return response.data;
  } catch (error) {
      console.log(error.message)
  }
}

export const getOwnRecipes = async(page, per_page) => {
  try {
    if (page && per_page) {
      const response = await axios.get(`/ownRecipes?page=${page}&per_page=${per_page}`)
      return response.data;
    }
          const response = await axios.get('/ownRecipes')
      return response.data;
  } catch (error) {
    console.log(error.message)
  }
};

export const addOwnRecipe = async body => {
  try {
    const response = await axios.get('/ownRecipes', body);
    return response.data;

  } catch (error) {
    console.log(error.message)
  }
};

export const deleteOwnRecipe = async id => {
  try {
    const response = await axios.delete(`/own-recipes/${id}`);
    return response.data;
  } catch (error) {
    console.log(error.message)
  }
}
