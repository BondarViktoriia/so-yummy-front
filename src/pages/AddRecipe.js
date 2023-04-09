import { useMediaQuery } from 'react-responsive';

import AddRecipeForm from '../components/AddRecipe/AddRecipeForm';
import PopularRecipe from '../components/AddRecipe/PopularRecipe';
import FollowUs from '../components/AddRecipe/FollowUs';
import {
  TitleFollowUs,
  WrapperFollowUs,
  FollowUsThumb,
} from './AddREcipe.styled';

const AddRecipe = () => {
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

export default AddRecipe;
