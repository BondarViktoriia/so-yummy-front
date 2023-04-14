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

import {
  IngredientsItem,
  ValueInputWrapper,
  InputUnitValue,
  ButtonRemoveItem,
} from './AddRecipeForm.styled';
import Select from 'react-select';
import { stylesMeta } from './selectStyle';
import { categoriesList } from '../../utilities/categoriesList';
import { timeOptionsList } from '../../utilities/timeOptionsList';
import { unitsOptionsList } from '../../utilities/unitsOptionsList';

const AddRecipeForm = ({
  handleDecrement,
  handleIncrement,
  handleUserIngredient,
  handleUnitValue,
  handleRemove,
  userIngredients,
  handleChange,
  handleSelect,
  handleSubmit,
  path,
  file,
  ingredients,
  handleFile,
  inputs,
}) => {
  const ingredientsOptionsList = list => {
    return list.map(({ ttl }) => ({
      label: ttl,
      value: ttl,
    }));
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
              {!file ? (
                <img src={addRecipe} alt="addRecipe" />
              ) : (
                <img src={path} alt="addRecipe" />
              )}
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
        <ButtonAdd type="submit">Add</ButtonAdd>
      </Form>
    </Wrap>
  );
};

export default AddRecipeForm;
