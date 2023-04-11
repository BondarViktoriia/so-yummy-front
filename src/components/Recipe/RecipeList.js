import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectShoppingList } from '../../redux/shoppingList/shoppingListSelectors';
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

import {
  getShoppingList,
  addToShoppingList,
  deleteFromShoppingList,
} from '../../redux/shoppingList/shoppingListOperations';

import RecipeImgPlaceholder from '../../image/recipe-page/recipe-img-tablet2x.png';

const RecipeList = ({ ingreds }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShoppingList());
  }, [dispatch]);

  const shoppingList = useSelector(selectShoppingList);

  function checkItemInList(value) {
    const isInList = shoppingList.find(item => item.ttl === value);
    return isInList;
  }

  const handleCheckboxChange = (event, data) => {
    const id = event.target.id;
    const isInShopList = checkItemInList(event.target.value);
    if (isInShopList) {
      dispatch(deleteFromShoppingList(id));
    } else {
      dispatch(addToShoppingList(data));
    }
  };

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
                  value={ttl}
                  type="checkbox"
                  checked={checkItemInList(ttl)}
                  onChange={event =>
                    handleCheckboxChange(event, { ttl, thb, measure })
                  }
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
