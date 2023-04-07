import AddRecipeForm from '../components/AddRecipe/AddRecipeForm';
import PopularRecipe from '../components/AddRecipe/PopularRecipe';
import FollowUs from '../components/AddRecipe/FollowUs'

const AddRecipe = () => {
    return (
        <>
            <AddRecipeForm />
            <FollowUs/>
        <PopularRecipe/>
        </>
    )
 };

export default AddRecipe;