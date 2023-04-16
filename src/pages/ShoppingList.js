import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectShoppingList,
  isLoading,
} from '../redux/shoppingList/shoppingListSelectors';
import {
  getShoppingList,
  deleteFromShoppingList,
} from '../redux/shoppingList/shoppingListOperations';
import { IoCloseOutline } from 'react-icons/io5';

import Container from '../components/Container/Container';
import Title from '../components/Title/Title';
import { Loader } from '../components/Loader/Loader';

import {
  CoContainer,
  ListHeader,
  RemoveHeader,
  List,
  ImgThumb,
  LeftWrapper,
  ListItem,
  Measure,
  RightWrapper,
  IngredTtl,
  EmptyList,
  DeleteButton,
} from './ShoppingList.styled';

const ShoppingList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShoppingList());
  }, [dispatch]);

  const contactDeleter = id => {
    dispatch(deleteFromShoppingList(id));
  };

  const shopList = useSelector(selectShoppingList);

  const itisLoading = useSelector(isLoading);

  return (
    <Container>
      <CoContainer>
        <Title>Shopping list</Title>
        {itisLoading && <Loader />}
        {shopList.length > 0 ? (
          <>
            <ListHeader>
              <p>Product</p>
              <RemoveHeader>
                <span>Number</span>
                <span>Remove</span>
              </RemoveHeader>
            </ListHeader>
            <List>
              {shopList.map(({ _id, ttl, thb, measure }) => {
                return (
                  <ListItem key={_id}>
                    <LeftWrapper>
                      <ImgThumb>
                        <img src={thb} alt={ttl } />
                      </ImgThumb>
                      <IngredTtl>{ttl}</IngredTtl>
                    </LeftWrapper>

                    <RightWrapper>
                      <Measure>
                        <span>{measure}</span>
                      </Measure>
                      <DeleteButton
                        type="button"
                        onClick={() => {
                          contactDeleter(_id);
                        }}
                      >
                        <IoCloseOutline />
                      </DeleteButton>
                    </RightWrapper>
                  </ListItem>
                );
              })}
            </List>
          </>
        ) : (
          <EmptyList>Your shopping list is empty !</EmptyList>
        )}
      </CoContainer>
    </Container>
  );
};

export default ShoppingList;
