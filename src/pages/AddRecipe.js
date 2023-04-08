import AddRecipeForm from '../components/AddRecipe/AddRecipeForm';
import PopularRecipe from '../components/AddRecipe/PopularRecipe';
import FollowUs from '../components/AddRecipe/FollowUs';
import {TitleFollowUs,WrapperFollowUs} from './AddREcipe.styled'

const AddRecipe = () => {
    return (
        <div>
            <AddRecipeForm />
            <WrapperFollowUs>
                <TitleFollowUs>Follow us</TitleFollowUs>
                <FollowUs />
                  <PopularRecipe/>
            </WrapperFollowUs>
          

        </div>
    )
 };

export default AddRecipe;