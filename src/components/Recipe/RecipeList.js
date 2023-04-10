// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
// import { selectShoppingList } from '../../redux/shoppingList/shoppingListSelectors';
import {
  Wrapper,
  ListTitle,
  StyledSpan,
  ListItemStyled,
  ListStyled,
  Thumb,
  Image,
  WrapForContent,
  TitleIngred,
  MeasureStyled,
  OriginalCheckbox,
} from './RecipeList.styled';

// import {
//   addToShoppingList,
//   removeFromShoppingList,
// } from '../../redux/recipePage/recipeOperations';

import RecipeImgPlaceholder from '../../image/recipe-page/recipe-img-tablet2x.png';

const RecipeList = ({ ingreds }) => {
  // const dispatch = useDispatch();
  // const shoppingList = useSelector(selectShoppingList);

  const handleCheckboxChange = event => {
    console.log(event);
  };

  // function getData() {
  //   const data = dispatch(fetchShoppingList());
  //   if (data) {
  //     setShopList(data);
  //   }
  // }

  // getData();

  return (
    <Wrapper>
      <ListTitle>
        <StyledSpan>Ingredients</StyledSpan>
        <StyledSpan>Number</StyledSpan>
        <StyledSpan>Add to list</StyledSpan>
      </ListTitle>
      <ListStyled>
        {ingreds.map(({ _id, ttl, thb, measure }) => {
          return (
            <ListItemStyled key={_id}>
              <WrapForContent>
                <Thumb>
                  <Image src={thb ?? RecipeImgPlaceholder} alt={ttl}></Image>
                </Thumb>

                <TitleIngred>{ttl}</TitleIngred>
              </WrapForContent>
              <WrapForContent>
                <MeasureStyled>{measure ?? 'Unknown'}</MeasureStyled>
                <OriginalCheckbox
                  id={_id}
                  value={_id}
                  type="checkbox"
                  checked={true}
                  onChange={handleCheckboxChange}
                ></OriginalCheckbox>
              </WrapForContent>
            </ListItemStyled>
          );
        })}
      </ListStyled>
    </Wrapper>
  );
};

export default RecipeList;
