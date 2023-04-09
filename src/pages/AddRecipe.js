import { useMediaQuery } from 'react-responsive';

import AddRecipeForm from '../components/AddRecipe/AddRecipeForm';
import PopularRecipe from '../components/AddRecipe/PopularRecipe';
import FollowUs from '../components/AddRecipe/FollowUs';
import {
  TitleFollowUs,
  WrapperFollowUs,
  FollowUsThumb,
} from './AddREcipe.styled';

import MainSection from "../components/MainSection/MainSection"
const AddRecipe = () => {
<<<<<<< HEAD
    return (
        <div>
            <AddRecipeForm />
            <WrapperFollowUs>
                <TitleFollowUs>Follow us</TitleFollowUs>
                <FollowUs />
                <PopularRecipe />
                
                <MainSection/>
            </WrapperFollowUs>
          
=======
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  return (
    <div>
      <AddRecipeForm />
      <WrapperFollowUs>
        {isDesktop && (
          <FollowUsThumb>
            <TitleFollowUs>Follow us</TitleFollowUs>
            <FollowUs />
          </FollowUsThumb>
        )}
        <PopularRecipe />
      </WrapperFollowUs>
    </div>
  );
};
>>>>>>> 54f5b115a9f57dbc2657bc0e83844b46f976516e

export default AddRecipe;
