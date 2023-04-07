// import axios from 'axios';

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
        {/* {shopList.map(() => {})} */}
      </ul>
    </div>
  );
};

export default ShoppingList;
