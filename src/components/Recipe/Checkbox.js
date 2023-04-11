import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { OriginalCheckbox } from './RecipeList.styled';
import {
  addToShoppingList,
  deleteFromShoppingList,
} from '../../redux/shoppingList/shoppingListOperations';

export const MyCheckbox = ({ ingredient, currentShopList }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  const { _id, ttl, thb, measure } = ingredient;

  useEffect(() => {
    const isInList = currentShopList.find(item => item.ttl === ttl);
    setChecked(isInList ? isInList._id : false);
  }, [currentShopList, ttl]);

  const handleCheckboxChange = (event, data) => {
    if (checked) {
      dispatch(deleteFromShoppingList(checked)).then(() => setChecked(false));
    } else {
      dispatch(addToShoppingList(data)).then(() => setChecked(true));
    }
  };

  return (
    <OriginalCheckbox
      id={_id}
      type="checkbox"
      checked={checked}
      onChange={event => handleCheckboxChange(event, { ttl, thb, measure })}
    ></OriginalCheckbox>
  );
};
