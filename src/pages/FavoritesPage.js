import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getFavorites} from '../redux/favorites/favoritesOperations'
import Favorite from '../components/Favorites';
import Title from '../components/Title/Title'
import Container from '../components/Container/Container';
import {EmptyList} from '../components/Favorites/Favorotes.styled'
import {selectFavorites, selectError, selectIsLoading} from '../redux/favorites/favoritesSelectors'


const recipesTest = [
  {
    "_id": "64300f5b1383edd77637ca27",
    "title": "Spaghetti Bolognese",
    "description": "An Italian pasta dish made with spaghetti and a meat-based sauce, typically containing beef, tomatoes, onions, garlic, and herbs.",
    "thumb": "https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg",
    "time": "45",
  },
  {
    "_id":  "64300f5b1383edd77637ca28",
    "title": "Bakewell tart",
    "description": "A British dessert consisting of a shortcrust pastry shell filled with raspberry jam, frangipane, and topped with almonds.",
    "thumb": "https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg",
    "time": "85",
  },
  {
    "_id":  "64300f5b1383edd77637ca29",
    "title": "Teriyaki Chicken Casserole",
    "description": "A Japanese-inspired casserole made with chicken, teriyaki sauce, rice, and vegetables.",
    "thumb": "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
    "time": "75",
  },
  {
    "_id": "64300f5b1383edd77637ca2a",
    "title": "Chicken Enchilada Casserole",

    "description": "A Mexican-inspired casserole made with shredded chicken, enchilada sauce, tortillas, and cheese.",
    "thumb": "https://www.themealdb.com/images/media/meals/qtuwxu1468233098.jpg",
    "preview": "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560403/smb2tdq5ltv4usbnvmt2.jpg",
    "time": "60",
  },
]

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);


useEffect(() => {
dispatch(getFavorites())
}, [dispatch])

    return (
      <Container>
          <Title>Favorites</Title>
          <Favorite recipes={recipesTest} page="favorite"/>
          {/* {favorites.length > 0 && <Favorite recipes={favorites} page="favorite"/>} */}
          {favorites.length === 0 && !isLoading && !error && (<EmptyList>The list is empty</EmptyList>)}
      </Container>    
    )
};

export default FavoritesPage;