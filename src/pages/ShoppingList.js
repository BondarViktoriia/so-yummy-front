import styled from 'styled-components';

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
    <div>
      <h1>Shopping list</h1>
      <ul>
        <li> Product Number Remove</li>
        {shopList.map(({ _id, ttl, thb, measure }) => {
          return (
            <li key={_id}>
              <img src={thb} width="60" alt="qwe" />
              <p>{ttl}</p>

              <p>{measure}</p>
              <button type="button">
                <svg></svg>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const deleteButton = styled.button`
  background-color: transparent;
`;

export default ShoppingList;
