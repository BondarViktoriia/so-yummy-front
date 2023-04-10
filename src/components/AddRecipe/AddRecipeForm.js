// import React, { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

// import { Counter } from './Counter/Counter';
import {
  ImageBox,
  ImageInput,
  Title,
  Wrap,
  Form,
  InputDescriptionWrap,
  InputDescription,
  SelectDescription,
  TitleIngredients,
  WrapIngredients,
  InputIngredientsWrap,
  MainWrapIngredients,

  TitlePreparation,
  WrapPreparation,
  TextAreaPreparation,
  ButtonAdd,
  WrapButtonAdd,
  Description,
  InputWrap,IngredientsTitle,IngredientsList,stylesIngredient,stylesUnit
} from './AddRecipeForm.styled';
import addRecipe from '../../image/addRecipe.png';
import { Counter } from '../AddRecipe/Counter';

import store from "store";
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import {IngredientsItem,ValueInputWrapper,InputUnitValue,ButtonRemoveItem} from './AddRecipeForm.styled'
import Select from 'react-select';
import axios from 'axios'

const init = {
  recipe: '',
  title: '',
  about: '',
  category: '',
  time: '',
  unitValue: '',
};

const AddRecipeForm = () => {
  const dispatch = useDispatch();
    const [inputs, setInputs] = useState(() => {
    const inputs = store.get('userInputs');
    return inputs ? inputs : init;
    });
  console.log("inputs",inputs)



   const [userIngredients, setUserIngredients] = useState(() => {
    const ingredients = store.get('userIngredients');
    return ingredients ? ingredients : [];
   });
  const [ingredients,setIngredients]=useState([])
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
        console.log("response", response)
         if (response) {
         
          setIngredients(response.data);
        }
      } catch (error) {
         console.log(error.message)
      }
    }
      optionsIngredients();
  }, [dispatch])
  

   const handleDecrement = () => {
    if (userIngredients.length <= 0) return;
    setUserIngredients(prev => [...prev.slice(0, prev.length - 1)]);
  };

  const handleIncrement = () => {
    setUserIngredients(prev => [
      ...prev,
      { id: nanoid(), ttl: 'Beef', unitValue: 100, qty: 'g' },
    ]);
  };


const ingredientsOptionsList = list => {
  return list.map(({ ttl }) => ({
    label: ttl,
    value: ttl,
  }));
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
  const unitsOptionsList = [
  { value: 'tbs', label: 'tbs' },
  { value: 'tsp', label: 'tsp' },
  { value: 'kg', label: 'kg' },
  { value: 'g', label: 'g' },
  ];
   const handleRemove = ({ currentTarget }) => {
    const newList = userIngredients.filter(el => el.id !== currentTarget.id);
    setUserIngredients(newList);
  };

console.log("userIngredients",userIngredients)
    const userIngredientsList = userIngredients.map(
    ({ id, ttl,qty,unitValue }) => {
      return (
        <IngredientsItem key={id}>
          <Select
            styles={stylesIngredient}
            options={ingredientsOptionsList(ingredients)}
            defaultValue={{  value: ttl }}
            placeholder=" "
            onChange={handleUserIngredient}
            name={`ttl ${id}`}
          />
          <ValueInputWrapper >
            <InputUnitValue

              type="text"
              name="unitValue"
              onChange={handleUnitValue}
              defaultValue={unitValue}
              autoComplete="off"
              id={id}
            />
            <Select
                  styles={stylesUnit}
              options={unitsOptionsList}
              defaultValue={{ label: qty, value: qty }}
              placeholder=" "
              onChange={handleUserIngredient}
              isSearchable={false}
              name={`qty ${id}`}
            />
          </ValueInputWrapper>
          <ButtonRemoveItem type="button" id={id} onClick={handleRemove}>
           <IoCloseOutline/>
          </ButtonRemoveItem>
        </IngredientsItem>
      );
    }
  );
  const counter = userIngredients.length
  return (
    <Wrap>
      <Title>Add recipe</Title>
      <Form>
        <Description>
          <ImageBox>
            <label htmlFor="file-input">
              <img src={addRecipe} alt="addRecipe" />
            </label>
            <ImageInput
              id="file-input"
              type="file"
              accept="image/png, image/jpeg"
            />
          </ImageBox>
          <InputWrap>
            <InputDescriptionWrap>
              <InputDescription
                type="text"
                name=""
                id=""
                placeholder="Enter item title"
              />
            </InputDescriptionWrap>
            <InputDescriptionWrap>
              <InputDescription
                type="text"
                name=""
                id=""
                placeholder="Enter about recipe"
              />
            </InputDescriptionWrap>
            <InputDescriptionWrap>
              <InputDescription
                type="text"
                name=""
                id=""
                placeholder="Category"
                disabled
              />
              <SelectDescription name="categories" id="categories">
                <option value="Breakfast">Breakfast</option>
                <option value="Beef">Beef</option>
                <option value="Dessert">Dessert</option>
                <option value="Goat">Goat</option>
                <option value="Lamb">Lamb</option>
                <option value="Miscellaneous">Miscellaneous</option>
              </SelectDescription>
            </InputDescriptionWrap>
            <InputDescriptionWrap>
              <InputDescription
                type="text"
                name=""
                id="cooking-time"
                placeholder="Cooking time"
                disabled
              />
              <SelectDescription name="cooking-time" id="cooking-time">
                <option value="">40 min</option>
                <option value="">30 min</option>
                <option value="">20 min</option>
                <option value="">15 min</option>
                <option value="">10 min</option>
                <option value="">5 min</option>
              </SelectDescription>
            </InputDescriptionWrap>
          </InputWrap>
        </Description>
        <MainWrapIngredients>
          <WrapIngredients>
            <TitleIngredients>Ingredients</TitleIngredients>

          </WrapIngredients>

          <InputIngredientsWrap>
                  <IngredientsTitle>
        <Counter
          counter={counter}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
        />
      </IngredientsTitle>
      <IngredientsList>{userIngredientsList}</IngredientsList>
          </InputIngredientsWrap>
          {/* <InputIngredientsWrap>
            <div>
              <InputIngredients type="text" name="" id="" placeholder="" />
              <SelectIngredients name="ingredients" id="ingredients">
                <option value="Beef">tbs</option>
                <option value="Breakfast">tsp</option>
                <option value="Dessert">kg</option>
                <option value="Goat">g</option>
              </SelectIngredients>
                          <IoCloseOutline size={18} />

            </div>
          </InputIngredientsWrap> */}

          <WrapPreparation>
            <TitlePreparation>Recipe Preparation</TitlePreparation>
            <TextAreaPreparation
              name=""
              id=""
              // cols="30"
              rows="7"
              placeholder="Enter recipe"
            ></TextAreaPreparation>
          </WrapPreparation>
        </MainWrapIngredients>
        <WrapButtonAdd>
          <ButtonAdd type="submit">Add</ButtonAdd>
        </WrapButtonAdd>
      </Form>
    </Wrap>
  );
};

export default AddRecipeForm;
