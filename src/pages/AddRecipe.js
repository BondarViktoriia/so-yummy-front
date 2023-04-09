import { useMediaQuery } from 'react-responsive';

import AddRecipeForm from '../components/AddRecipe/AddRecipeForm';
import PopularRecipe from '../components/AddRecipe/PopularRecipe';
import FollowUs from '../components/AddRecipe/FollowUs';
import {
  TitleFollowUs,
  WrapperFollowUs,
  FollowUsThumb,
} from './AddREcipe.styled';
import Container from '../components/Container/Container'

const AddRecipe = () => {

  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  return (
    <Container>
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
    </Container>
  );

}

export default AddRecipe;
