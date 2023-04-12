// import React, { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import {
  ImageBox,
  ImageInput,
  Wrap,
  Form,
  InputDescriptionWrap,
  InputDescription,
  TitleIngredients,
  WrapIngredients,
  InputIngredientsWrap,
  MainWrapIngredients,
  WrapPreparation,
  TextAreaPreparation,
  ButtonAdd,
  WrapButtonAdd,
  Description,
  InputWrap,
  IngredientsList,
  stylesIngredient,
  stylesUnit,
  SelecComponent,
  TitlePreparation,
} from './AddRecipeForm.styled';
import addRecipe from '../../image/addRecipe.png';
import { Counter } from '../AddRecipe/Counter';

import store from 'store';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import {
  IngredientsItem,
  ValueInputWrapper,
  InputUnitValue,
  ButtonRemoveItem,
} from './AddRecipeForm.styled';
import Select from 'react-select';
import axios from 'axios';
// import { addOwnRecipeOperation } from '../../redux/ownRecipe/ownRecipesOperation';
import { stylesMeta } from './selectStyle';
import { categoriesList } from '../../utilities/categoriesList';
import { timeOptionsList } from '../../utilities/timeOptionsList';
import { unitsOptionsList } from '../../utilities/unitsOptionsList';
// import Title from '../Title/Title';

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

  const [userIngredients, setUserIngredients] = useState(() => {
    const ingredients = store.get('userIngredients');
    return ingredients ? ingredients : [];
  });

  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    store.set('userIngredients', userIngredients);
  }, [inputs, userIngredients]);

  const [file, setFile] = useState(null);
  const [path, setPath] = useState('');

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

  const handleRemove = ({ currentTarget }) => {
    const newList = userIngredients.filter(el => el.id !== currentTarget.id);
    setUserIngredients(newList);
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
    e.preventDefault();

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
      console.log('INVALID FORM DATA');
      return;
    }

    // const myRecipe = {
    //   description: recipe,
    //   time: time.toString(),
    //   category: category,
    //   instructions: about,
    //   title: about,
    //   ingredients: JSON.stringify(ingredientsList),
    // };

    const formData = new FormData();

    formData.append('imgURL', file);
    formData.append('description', recipe);
    formData.append('time', time);
    formData.append('category', category);
    formData.append('instructions', about);
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

    resetForm();
  };

  const resetForm = () => {
    setInputs(init);
    setUserIngredients([]);
    setFile(null);
  };

  const userIngredientsList = userIngredients.map(
    ({ id, ttl, qty, unitValue }) => {
      return (
        <IngredientsItem key={id}>
          <Select
            styles={stylesIngredient}
            options={ingredientsOptionsList(ingredients)}
            defaultValue={{ value: ttl }}
            placeholder=" "
            onChange={handleUserIngredient}
            name={`ttl ${id}`}
          />
          <ValueInputWrapper>
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
            <IoCloseOutline />
          </ButtonRemoveItem>
        </IngredientsItem>
      );
    }
  );
  const counter = userIngredients.length;
  return (
    <Wrap>
      <Form onSubmit={handleSubmit} enctype="multipart/form-data">
        <Description path={path}>
          <ImageBox>
            <label htmlFor="file-input">
              <img src={addRecipe} alt="addRecipe" />
            </label>
            <ImageInput
              id="file-input"
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleFile}
            />
          </ImageBox>
          <InputWrap>
            <InputDescriptionWrap>
              <InputDescription
                type="text"
                name="title"
                placeholder="Enter item title"
                value={inputs.title}
                onChange={handleChange}
              />
            </InputDescriptionWrap>
            <InputDescriptionWrap>
              <InputDescription
                type="text"
                name="about"
                placeholder="Enter about recipe"
                value={inputs.about}
                onChange={handleChange}
              />
            </InputDescriptionWrap>
            <InputDescriptionWrap>
              <SelecComponent>
                Categories
                <Select
                  styles={stylesMeta}
                  options={categoriesList}
                  defaultValue={{ label: 'Breakfast', value: 'Breakfast' }}
                  placeholder=" "
                  onChange={handleSelect}
                  name="category"
                />
              </SelecComponent>
            </InputDescriptionWrap>
            <InputDescriptionWrap>
              <SelecComponent
                hiddenLabel
                fullWidth
                size="normal"
                variant="standard"
                placeholder="Time"
                name="time"
                value={inputs.time}
                readOnly
                autoComplete="off"
              >
                Cooking time
                <Select
                  styles={stylesMeta}
                  options={timeOptionsList()}
                  defaultValue={timeOptionsList()[2]}
                  placeholder=" "
                  onChange={handleSelect}
                  name="time"
                />
              </SelecComponent>
            </InputDescriptionWrap>
          </InputWrap>
        </Description>
        <MainWrapIngredients>
          <WrapIngredients>
            <TitleIngredients>Ingredients</TitleIngredients>
            <Counter
              counter={counter}
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
            />
          </WrapIngredients>

          <InputIngredientsWrap>
            <IngredientsList>{userIngredientsList}</IngredientsList>
          </InputIngredientsWrap>

          <WrapPreparation>
            <TitlePreparation>Recipe Preparation</TitlePreparation>
            <TextAreaPreparation
              name="recipe"
              value={inputs.recipe}
              placeholder="Enter recipe"
              onChange={handleChange}
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
