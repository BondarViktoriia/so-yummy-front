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
import { Loader } from '../Loader/Loader';    



const MainSection = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
 
  useEffect(() => {
    const getMainRecipes = async () => {
 
      try {
        setIsLoading(true);
        const response = await axios.get(
          'https://so-yummy-7n94.onrender.com/api/recipes/main'
        );

        if (response) {
          setCategories(response.data);
        }
      } catch (error) {
        console.log(error.message);
       } finally {
         setIsLoading(false);
       }
    };
    getMainRecipes();
  }, []);


  return (
  <>
    {isLoading && <Loader />}
    <SectionMain>
      <Container>
        <Wrap>
          <MainCategories>
            {categories &&  
              categories.map(categoryResalt => (
                <li key={categoryResalt.category}>
                  <MainTitle key={categoryResalt.category}>
                    {categoryResalt.category}
                  </MainTitle>
                   <MainList>
                    {categoryResalt.results.map(meal => (
                      <MainItem key={meal._id} meal={meal} />
                    ))}
                  </MainList>                 
                     <Link
                    to={`/categories/${categoryResalt.category}`}
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
      </>
  );
};

export default MainSection;
