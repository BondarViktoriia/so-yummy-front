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
} from './RecipeList.styled';
import IngredPlaceholder from '../../image/plugs/fish-dekstop-2x.png';
import { getShoppingList } from '../../redux/shoppingList/shoppingListOperations';
import { MyCheckbox } from './Checkbox';

const RecipeList = ({ ingreds }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShoppingList());
  }, [dispatch]);

  const shoppingList = useSelector(selectShoppingList);

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
                  <Image src={thb ?? IngredPlaceholder} alt={ttl}></Image>
                </Thumb>

                <TitleIngred>{ttl}</TitleIngred>
              </WrapForContent>
              <WrapForContent>
                <MeasureStyled>{measure ?? 'Unknown'}</MeasureStyled>
                <MyCheckbox
                  ingredient={{ _id, ttl, thb, measure }}
                  currentShopList={shoppingList}
                ></MyCheckbox>
              </WrapForContent>
            </ListItemStyled>
          );
        })}
      </ListStyled>
    </Wrapper>
  );
};

export default RecipeList;
