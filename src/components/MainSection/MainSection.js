import { useState, useEffect } from 'react';
import Container from '../Container/Container';
import {
  SectionMain,
  MainCategories,
  Link,
  MainButton,
  MainTitle,
  MainList,
  Wrap,
} from './MainSection.styled';
import axios from 'axios';
import MainItem from './MainItem';
import { useMediaQuery } from 'react-responsive';

const MainSection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getMainRecipes = async () => {
      try {
        const response = await axios.get(
          'https://so-yummy-7n94.onrender.com/api/recipes/main'
        );

        if (response) {
          setCategories(response.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getMainRecipes();
  }, []);

  console.log('categoriesObj', Object.entries(categories));

  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });

  let numCard;
  if (isDesktop) {
    numCard = 4;
  } else if (isTablet) {
    numCard = 2;
  } else {
    numCard = 1;
  }
  return (
    <SectionMain>
      <Container>
        <Wrap>
          <MainCategories>
            {categories &&
              Object.entries(categories).map(([categoryKey, meals]) => (
                <li key={categoryKey}>
                  {meals.slice(3).map(meal => (
                    <MainTitle>{meal.category}</MainTitle>
                  ))}

                  <MainList>
                    {meals.slice(0, numCard).map(meal => (
                      <MainItem key={meal._id} meal={meal} />
                    ))}
                  </MainList>
                  <Link
                    to={`/categories/${meals.category}`}
                    style={isActive => ({
                      color: isActive ? '#8AA936' : '#BDBDBD',
                    })}
                  >
                    See all
                  </Link>
                </li>
              ))}
          </MainCategories>
          <MainButton to="/categories/Beef">Other categories</MainButton>
        </Wrap>
      </Container>
    </SectionMain>
  );
};

export default MainSection;
