import Favorite from '../components/Favorites';
import Title from 'components/Title/Title';
import {ContainerStyled} from "../components/Container/Container.styled"

const recipesTest = [{
  "_id": "640cd5ac2d9fecf12e8897fc",
  "title": "Spaghetti Bolognese",
  "description": "An Italian pasta dish made with spaghetti and a meat-based sauce, typically containing beef, tomatoes, onions, garlic, and herbs.",
  "thumb": "https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg",
  "time": "45",
},
{
  "_id":  "640cd5ac2d9fecf12e8897f0",
 "title": "Teriyaki Chicken Casserole",
  "description": "A Japanese-inspired casserole made with chicken, teriyaki sauce, rice, and vegetables.",
  "thumb": "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
  "time": "75",
},
]

const FavoritesPage = () => {
  // const [recipes, setRecipes] = useState();

// useEffect(() => {
//   async function addFavorite(){
//     try {
//         const data = await getFavorite();
//         setRecipes(data);
//     } catch (error) {
//         console.log(error);
//     };
//   };

//   addFavorite()
// }, [])
    return (
      <ContainerStyled>
        <Title>Favorite</Title>
        <Favorite recipes={recipesTest} page="favorite"/>
      </ContainerStyled>    
    )
};

export default FavoritesPage;

