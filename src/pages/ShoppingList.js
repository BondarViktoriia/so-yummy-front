import styled from 'styled-components';
import { IoCloseOutline } from 'react-icons/io5';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectShoppingList } from '../redux/shoppingList/shoppingListSelectors';
import { getShoppingList } from '../redux/shoppingList/shoppingListOperations';

const ShoppingList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShoppingList());
  }, [dispatch]);

  const shopList = useSelector(selectShoppingList);

  console.log(shopList);

  return (
    <Container>
      <h1>Shopping list</h1>
      <ul>
        <li> Product Number Remove</li>
        {shopList.map(({ _id, ttl, thb, measure }) => {
          return (
            <ListItem key={_id}>
              <img src={thb} width="60" alt="qwe" />
              <p>{ttl}</p>

              <p>{measure}</p>
              <DeleteButton type="button">
                <IoCloseOutline></IoCloseOutline>
              </DeleteButton>
            </ListItem>
          );
        })}
      </ul>
    </Container>
  );
};

const DeleteButton = styled.button`
  background-color: transparent;
`;

const Container = styled.div`
  margin-top: 66px;
`;

const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export default ShoppingList;
