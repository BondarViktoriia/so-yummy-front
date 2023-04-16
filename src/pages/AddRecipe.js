import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import AddRecipeForm from '../components/AddRecipe/AddRecipeForm';
import PopularRecipe from '../components/AddRecipe/PopularRecipe';
import FollowUs from '../components/AddRecipe/FollowUs';
import {
  TitleFollowUs,
  WrapperFollowUs,
  FollowUsThumb,
  AddRecipeWrapper,
} from './AddREcipe.styled';
import Container from '../components/Container/Container';

import store from 'store';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import Title from '../components/Title/Title';
import axios from 'axios';
import { Loader } from '../components/Loader/Loader';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const init = {
  recipe: '',
  title: '',
  about: '',
  category: '',
  time: '',
  unitValue: '',
};

const AddRecipe = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const [userIngredients, setUserIngredients] = useState(() => {
    const ingredients = store.get('userIngredients');
    return ingredients ? ingredients : [];
  });
  const [inputs, setInputs] = useState(() => {
    const inputs = store.get('userInputs');
    return inputs ? inputs : init;
  });
  const [ingredients, setIngredients] = useState([]);

  const [file, setFile] = useState(null);
  const [path, setPath] = useState('');
  const [isLoading, setIsLoadind] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    store.set('userInputs', inputs);
    store.set('userIngredients', userIngredients);
  }, [inputs, userIngredients]);

  useEffect(() => {
    const optionsIngredients = async () => {
      try {
        const response = await axios.get(
          'https://so-yummy-7n94.onrender.com/api/ingredients/list'
        );

        if (response) {
          setIngredients(response.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    optionsIngredients();
  }, [dispatch]);

  const handleDecrement = () => {
    if (userIngredients.length <= 0) return;
    setUserIngredients(prev => [...prev.slice(0, prev.length - 1)]);
  };

  const handleIncrement = () => {
    setUserIngredients(prev => {
      return [...prev, { id: nanoid(), ttl: 'Beef', unitValue: 100, qty: 'g' }];
    });
  };

  const handleRemove = ({ currentTarget }) => {
    const newList = userIngredients.filter(el => el.id !== currentTarget.id);
    setUserIngredients(newList);
  };
  const handleUserIngredient = (...args) => {
    const [{ value }, { name: dirtyName }] = args;
    const [name, id] = dirtyName.split(' ');

    setUserIngredients(prev => {
      const idx = prev.findIndex(el => el.id === id);
      const [item] = prev.filter(el => el.id === id);
      item[name] = value;
      prev[idx] = item;
      return [...prev];
    });
  };
  const handleUnitValue = ({ currentTarget }) => {
    const { id, value, name } = currentTarget;
    setInputs(prev => ({
      ...prev,
      [name]: value,
    }));
    setUserIngredients(prev => {
      const idx = prev.findIndex(el => el.id === id);

      const [item] = prev.filter(el => el.id === id);

      item[name] = value;

      prev[idx] = item;
      return [...prev];
    });
  };
  const handleFile = ({ currentTarget }) => {
    const { files } = currentTarget;
    const [file] = files;

    if (!file || !file.type.includes('image')) {
      setFile(null);
      setPath('');
      return;
    }
    setFile(file);
    setPath(URL.createObjectURL(file));
  };

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setInputs(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSelect = (...arg) => {
    const [valueObj, nameObj] = arg;
    const { value } = valueObj;
    const { name } = nameObj;
    setInputs(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = e => {
    // e.preventDefault();

    const { recipe, time, category, about, title } = inputs;

    const ingredientsList = userIngredients.map(
      ({ id, unitValue, ttl, qty: unit }) => {
        const selectedItem = ingredients.find(item => item.ttl === ttl);
        return {
          id: selectedItem._id,
          measure: `${unitValue} ${unit}`,
        };
      }
    );

    if (!recipe || !time || !category || !about || !title) {
      toast.error('INVALID FORM DATA!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,

        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    }

    const formData = new FormData();
    if (file !== null) {
      formData.append('imgURL', file);
    }

    formData.append('description', about);
    formData.append('time', time);
    formData.append('category', category);
    formData.append('instructions', recipe);
    formData.append('title', title);
    formData.append('ingredients', JSON.stringify(ingredientsList));

    const addOwnRecipeApi = async body => {
      try {
        const data = await axios.post('/ownRecipes', body);

        return data;
      } catch (error) {
        console.log(error.message);
      }
    };
    addOwnRecipeApi(formData);
    setIsLoadind(true);
    toast.success('Your Recipe successful added!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    resetForm();
    navigate('/my');
  };
  const resetForm = () => {
    setInputs(init);
    setUserIngredients([]);
    setFile(null);
    setIsLoadind(false);
  };

  return (
    <Container>
      <Title>Add recipe</Title>

      {!isLoading ? (
        <AddRecipeWrapper>
          <AddRecipeForm
            counter={userIngredients.length}
            userIngredients={userIngredients}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
            handleUserIngredient={handleUserIngredient}
            handleUnitValue={handleUnitValue}
            handleRemove={handleRemove}
            handleChange={handleChange}
            handleSelect={handleSelect}
            handleSubmit={handleSubmit}
            path={path}
            file={file}
            ingredients={ingredients}
            handleFile={handleFile}
            inputs={inputs}
          />
          <ToastContainer />
          <WrapperFollowUs>
            {isDesktop && (
              <FollowUsThumb>
                <TitleFollowUs>Follow us</TitleFollowUs>
                <FollowUs />
              </FollowUsThumb>
            )}
            <PopularRecipe />
          </WrapperFollowUs>
        </AddRecipeWrapper>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default AddRecipe;
