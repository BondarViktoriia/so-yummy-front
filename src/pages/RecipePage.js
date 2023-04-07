import { RecipeDescription } from '../components/Recipe';
import { ingreds } from '../components/Recipe/ingredsTest';
import { RecipeList } from '../components/Recipe';

const testRecipe = {
  _id: {
    $oid: '6426a8c69388c4008e826738',
  },
  title: 'Chicken Couscous',
  category: 'Chicken',
  area: 'Moroccan',
  instructions:
    'Heat the olive oil in a large frying pan and cook the onion for 1-2 mins just until softened. Add the chicken and fry for 7-10 mins until cooked through and the onions have turned golden. Grate over the ginger, stir through the harissa to coat everything and cook for 1 min more.\r\n\r\nTip in the apricots, chickpeas and couscous, then pour over the stock and stir once. Cover with a lid or tightly cover the pan with foil and leave for about 5 mins until the couscous has soaked up all the stock and is soft. Fluff up the couscous with a fork and scatter over the coriander to serve. Serve with extra harissa, if you like.',
  description:
    'A flavorful dish made with chicken, couscous, and vegetables. Easy to make and packed with nutrients.',
  thumb: 'https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg',
  preview:
    'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560539/qwsi0utjnchqht2hv0pn.jpg',
  time: '25',
  popularity: 0,
  favorites: [],
  likes: [],
  youtube: 'https://www.youtube.com/watch?v=GZQGy9oscVk',
  tags: [],
  createdAt: {
    $date: '2023-03-11T19:25:33.242Z',
  },
  updatedAt: {
    $date: '2023-03-17T11:56:31.324Z',
  },
  ingredients: [
    {
      id: {
        $oid: '640c2dd963a319ea671e372c',
      },
      measure: '1 tbsp',
    },
    {
      id: {
        $oid: '640c2dd963a319ea671e37ae',
      },
      measure: '1 chopped',
    },
    {
      id: {
        $oid: '640c2dd963a319ea671e3693',
      },
      measure: '200g',
    },
    {
      id: {
        $oid: '640c2dd963a319ea671e36e8',
      },
      measure: 'pinch',
    },
    {
      id: {
        $oid: '640c2dd963a319ea671e36fb',
      },
      measure: '2 tblsp ',
    },
    {
      id: {
        $oid: '640c2dd963a319ea671e37d2',
      },
      measure: '10',
    },
    {
      id: {
        $oid: '640c2dd963a319ea671e3698',
      },
      measure: '220g',
    },
    {
      id: {
        $oid: '640c2dd963a319ea671e37c1',
      },
      measure: '200g',
    },
    {
      id: {
        $oid: '640c2dd963a319ea671e3696',
      },
      measure: '200ml',
    },
    {
      id: {
        $oid: '640c2dd963a319ea671e36af',
      },
      measure: 'Handful',
    },
  ],
};
const RecipePage = () => {
  return (
    <>
      <RecipeDescription
        title={testRecipe.title}
        description={testRecipe.description}
        time={testRecipe.time}
      ></RecipeDescription>
      <RecipeList ingreds={ingreds}></RecipeList>
    </>
  );
};

export default RecipePage;
