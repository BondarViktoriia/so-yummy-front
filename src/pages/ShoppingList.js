import styled from 'styled-components';
import { IoCloseOutline } from 'react-icons/io5';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectShoppingList } from '../redux/shoppingList/shoppingListSelectors';
import {
  getShoppingList,
  deleteFromShoppingList,
} from '../redux/shoppingList/shoppingListOperations';

import Container from '../components/Container/Container';

const ShoppingList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShoppingList());
  }, [dispatch]);

  const contactDeleter = id => {
    dispatch(deleteFromShoppingList(id));
  };

  const shopList = useSelector(selectShoppingList);

  console.log(shopList);

  return (
    <Container>
      <CoContainer>
        <PageHeader>Shopping list</PageHeader>
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
                        <img src={thb} alt="qwe" />
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
                        <Cross />
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

  @media (min-width: 1440px) {
    padding-top: 100px;
    margin-left: 100px;
    margin-right: 100px;

    font-size: 44px;
  }
`;

const ListHeader = styled.div`
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

  @media (min-width: 1440px) {
    margin-left: 100px;
    margin-right: 100px;

    padding: 21px 40px;
  }
`;

const RemoveHeader = styled.p`
  display: flex;
  gap: 34px;

  @media (min-width: 768px) {
    gap: 95px;
  }

  @media (min-width: 1440px) {
    gap: 142px;
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

  @media (min-width: 1440px) {
    padding-left: 140px;
    padding-right: 140px;

    margin-bottom: 195px;
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

  @media (min-width: 1440px) {
  }
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
  padding: 6px;

  @media (min-width: 768px) {
    width: 93px;
    height: 97px;

    border-radius: 8px;

    padding: 8px 6px;
    margin-right: 16px;
  }

  @media (min-width: 1440px) {
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

  @media (min-width: 1440px) {
  }
`;

const RightWrapper = styled.div`
  display: flex;
  margin-right: 19px;

  @media (min-width: 768px) {
    margin-right: 45px;
  }

  @media (min-width: 1440px) {
    margin-right: 28px;
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
    width: 120px;

    font-size: 18px;
    line-height: 1.5;

    margin-right: 110px;
  }

  @media (min-width: 1440px) {
  }
`;

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;

  width: 14px;
  height: 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: 25px;
    height: 25px;

    font-size: 25px;
  }

  @media (min-width: 1440px) {
  }
`;

const Cross = styled(IoCloseOutline)``;

const EmptyList = styled.h2`
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

  @media (min-width: 1440px) {
  }
`;

export default ShoppingList;
