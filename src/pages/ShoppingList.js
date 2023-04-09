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
      <PageHeader>Shopping list</PageHeader>
      <ListHeader>
        <p>Product</p>
        <RemoveHeader>
          <p>Number</p>
          <p>Remove</p>
        </RemoveHeader>
      </ListHeader>
      <List>
        {shopList.map(({ _id, ttl, thb, measure }) => {
          return (
            <ListItem key={_id}>
              <LeftWrapper>
                <ImgThumb>
                  <img src={thb} width="60" alt="qwe" />
                </ImgThumb>
                <IngredTtl>{ttl}</IngredTtl>
              </LeftWrapper>

              <RightWrapper>
                <Measure>
                  <p>{measure}</p>
                </Measure>
                <DeleteButton type="button">
                  <IoCloseOutline></IoCloseOutline>
                </DeleteButton>
              </RightWrapper>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 66px;

  /* padding-left: 16px;
  padding-right: 16px; */
`;

const PageHeader = styled.h1`
  margin-top: 50px;
  margin-bottom: 50px;
  padding-left: 16px;
  padding-right: 16px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 1;

  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;

  color: ${props => props.theme.colors.title};
`;

const ListHeader = styled.p`
  background-color: ${props => props.theme.colors.accentGreen};

  color: ${props => props.theme.colors.background};
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.5;

  border-radius: 8px;
  padding: 10px;
  display: flex;
  justify-content: space-between;

  margin-bottom: 32px;
  margin-left: 8px;
  margin-right: 9px;
`;

const RemoveHeader = styled.p`
  display: flex;
  gap: 34px;
`;

const List = styled.ul`
  padding-left: 16px;
  padding-right: 16px;
`;

const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  border-bottom: 1px solid #e0e0e0;

  padding-bottom: 24px;
  margin-bottom: 24px;
`;

const LeftWrapper = styled.div`
  display: flex;
`;

const ImgThumb = styled.div`
  width: 60px;
  height: 60px;

  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.colors.logoLight};

  margin-right: 10px;
`;

const IngredTtl = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;
`;

const RightWrapper = styled.div`
  display: flex;
  margin-right: 19px;
`;

const Measure = styled.p`
  background-color: ${props => props.theme.colors.accentGreen};
  width: 57px;
  height: 23px;

  margin-right: 46px;

  border-radius: 4px;

  color: ${props => props.theme.colors.background};
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 1;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  width: 14px;
  height: 14px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ShoppingList;
