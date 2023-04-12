import axios from 'axios';

axios.defaults.baseURL = 'https://so-yummy-7n94.onrender.com/api';

export const updateUserData = async credentials => {
  const { data } = await axios.patch('/auth/update', credentials, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return data;
};
