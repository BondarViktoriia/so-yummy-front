
import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getFavorites} from '../redux/favorites/favoritesOperations'
import Favorite from '../components/Favorites';
import Title from '../components/Title/Title'

import Container from '../components/Container/Container';
import {EmptyList} from '../components/Favorites/Favorotes.styled'
import {selectFavorites, selectError, selectIsLoading} from '../redux/favorites/favoritesSelectors'

import PaginationComp from 'components/Pagination/Pagination';

const recipesTest = [
  {

    _id: '640cd5ac2d9fecf12e8897fc',
    title: 'Spaghetti Bolognese',
    description:
      'An Italian pasta dish made with spaghetti and a meat-based sauce, typically containing beef, tomatoes, onions, garlic, and herbs.',
    thumb: 'https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg',
    time: '45',
  },
  {
    _id: '640cd5ac2d9fecf12e8897f0',
    title: 'Teriyaki Chicken Casserole',
    description:
      'A Japanese-inspired casserole made with chicken, teriyaki sauce, rice, and vegetables.',
    thumb: 'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg',
    time: '75',
  },
  {
    _id: '640cd5ac2d9fecf12e8897f5',
    title: 'Mediterranean Pasta Salad',
    description:
      'A salad made with pasta, vegetables (such as tomatoes, cucumbers, and olives), feta cheese, and a dressing made with olive oil and lemon juice.',
    thumb: 'https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg',
    time: '27',
  },
  {
    _id: '640cd5ac2d9fecf12e8897f3',
    title: 'Vegan Lasagna',
    description:
      'A plant-based version of the classic Italian dish, made with layers of pasta, tomato sauce, vegan cheese, and vegetables (such as spinach, zucchini, and mushrooms).',
    thumb: 'https://www.themealdb.com/images/media/meals/rvxxuy1468312893.jpg',
    time: '50',
  },
];

const FavoritesPage = () => {
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    async function addFavorite() {
      try {
        const data = await getFavorite();
        setRecipes(data);
      } catch (error) {
        console.log(error);
      }
    }

    console.log(recipes);

    addFavorite();
  });

  return (


    </Container>
          <Container>
          <Title>Favorites</Title>
                <PaginationComp recipes={recipesTest} itemsPerPage={2} page="favorite" />
      {/* <Favorite recipes={recipesTest} page="favorite" /> */}
          {/* {favorites.length > 0 && <Favorite recipes={favorites} page="favorite"/>} */}
          {favorites.length === 0 && !isLoading && !error && (<EmptyList>The list is empty</EmptyList>)}
      </Container>  
  );

 


};

export default FavoritesPage;
