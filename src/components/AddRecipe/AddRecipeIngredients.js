import {Counter}  from './Counter';
// import { SubTitle } from 'components/SubTitle/SubTitle';
import Select from 'react-select';
// import icons from '../../images/sprite.svg';

import {
  ButtonRemoveItem,
  IngredientsItem,
  IngredientsList,
  IngredientsSection,
  IngredientsTitle,
  InputUnitValue,
  ValueInputWrapper,
  stylesIngredient,
  stylesUnit
} from './AddRecipeForm.styled';
import { useSelector } from 'react-redux';
import { getIngredients } from 'redux/ingredients/ingredientsSelectors';


 const AddRecipeIngredients = ({
  counter,
  userIngredients,
  isMobile,
  handleDecrement,
  handleIncrement,
  handleUserIngredient,
  handleUnitValue,
  handleRemove,
}) => {
  const optionsIngredients = useSelector(getIngredients);
  const ingredientsOptionsList = list => {
  return list.map(({ ttl }) => ({
    label: ttl,
    value: ttl,
  }));
  };
    const unitsOptionsList = [
  { value: 'tbs', label: 'tbs' },
  { value: 'tsp', label: 'tsp' },
  { value: 'kg', label: 'kg' },
  { value: 'g', label: 'g' },
  ];

  const userIngredientsList = userIngredients.map(
    ({ id, unitValue, ingredient, qty }) => {
      return (
        <IngredientsItem key={id}>
          <Select
            styles={stylesIngredient}
            options={ingredientsOptionsList(optionsIngredients)}
            defaultValue={{ label: ingredient, value: ingredient }}
            placeholder=" "
            onChange={handleUserIngredient}
            name={`ingredient ${id}`}
          />
          <ValueInputWrapper isMobile={isMobile}>
            <InputUnitValue
              isMobile={isMobile}
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
            {/* <svg width={20} height={20}>
              <use href={icons + '#icon-cross'}></use>
            </svg> */}
          </ButtonRemoveItem>
        </IngredientsItem>
      );
    }
  );
  return (
    <IngredientsSection>
      <IngredientsTitle>
        <Counter
          counter={counter}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
        />
      </IngredientsTitle>
      <IngredientsList>{userIngredientsList}</IngredientsList>
    </IngredientsSection>
  );
};

export default AddRecipeIngredients;