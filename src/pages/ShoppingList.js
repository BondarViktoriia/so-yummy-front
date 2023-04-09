import styled from 'styled-components';
import { IoCloseOutline } from 'react-icons/io5';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectShoppingList } from '../redux/shoppingList/shoppingListSelectors';
import { getShoppingList } from '../redux/shoppingList/shoppingListOperations';

import Container from '../components/Container/Container';

const ShoppingList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShoppingList());
  }, [dispatch]);

  const shopList = useSelector(selectShoppingList);

  console.log(shopList);

  return (
    <Container>
      <CoContainer>
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
                    <img src={thb} alt="qwe" />
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
      </CoContainer>
    </Container>
  );
};

const CoContainer = styled.div`
  margin-top: 64px;
`;

const PageHeader = styled.h1`
  padding-top: 50px;
  padding-bottom: 50px;
  margin-left: 16px;
  margin-right: 16px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 1;

  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;

  color: ${props => props.theme.colors.title};

  @media (min-width: 768px) {
    padding-top: 72px;
    padding-bottom: 72px;
    margin-left: 32px;
    margin-right: 32px;

    font-size: 32px;
  }
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
  margin-right: 8px;

  @media (min-width: 768px) {
    font-size: 18px;

    padding: 20px;

    margin-bottom: 50px;
    margin-left: 32px;
    margin-right: 32px;
  }
`;

const RemoveHeader = styled.p`
  display: flex;
  gap: 34px;

  @media (min-width: 768px) {
    gap: 95px;
  }
`;

const List = styled.ul`
  padding-left: 16px;
  padding-right: 16px;

  margin-bottom: 100px;

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;

    margin-bottom: 200px;
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  border-bottom: 1px solid #e0e0e0;

  padding-bottom: 24px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    padding-bottom: 43px;
    margin-bottom: 44px;
  }
`;

const LeftWrapper = styled.div`
  display: flex;

  @media (min-width: 768px) {
  }
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
  padding: 6px;

  @media (min-width: 768px) {
    width: 93px;
    height: 97px;

    border-radius: 8px;

    padding: 8px 6px;
    margin-right: 16px;
  }
`;

const IngredTtl = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

const RightWrapper = styled.div`
  display: flex;
  margin-right: 19px;

  @media (min-width: 768px) {
    margin-right: 45px;
  }
`;

const Measure = styled.p`
  background-color: ${props => props.theme.colors.accentGreen};
  width: 57px;
  padding: 4px;
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

  @media (min-width: 768px) {
    width: 104px;

    font-size: 18px;
    line-height: 1.5;

    margin-right: 110px;
  }
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

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;

    font-size: 20px;
  }
`;

export default ShoppingList;
