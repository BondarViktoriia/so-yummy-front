import { useMediaQuery } from 'react-responsive';

import AddRecipeForm from '../components/AddRecipe/AddRecipeForm';
import PopularRecipe from '../components/AddRecipe/PopularRecipe';
import FollowUs from '../components/AddRecipe/FollowUs';
import {
  TitleFollowUs,
  WrapperFollowUs,
  FollowUsThumb,
  AddRecipeWrapper
} from './AddREcipe.styled';
import Container from '../components/Container/Container'

import store from 'store';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { getAllIngredients } from '../redux/ingredients/ingredientsOperation';
import Title from '../components/Title/Title'

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
  const dispatch=useDispatch()
  useEffect(() => {
    store.set('userInputs', inputs);
    store.set('userIngredients', userIngredients);
  }, [inputs, userIngredients]);

  useEffect(() => {
    dispatch(getAllIngredients());

  }, [dispatch]);

  const handleDecrement = () => {
    if (userIngredients.length <= 0) return;
    setUserIngredients(prev => [...prev.slice(0, prev.length - 1)]);
  };

  const handleIncrement = () => {
    setUserIngredients(prev => [
      ...prev,
      { id: nanoid(), ingredient: 'Beef', unitValue: 100, qty: 'g' },
    ]);
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
  return (
    <Container>
         <Title>Add recipe</Title>
      <AddRecipeWrapper>
              <AddRecipeForm
                    counter={userIngredients.length}
            userIngredients={userIngredients}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
            handleUserIngredient={handleUserIngredient}
            handleUnitValue={handleUnitValue}
            handleRemove={handleRemove}
      />
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

    </Container>
  );

}

export default AddRecipe;
