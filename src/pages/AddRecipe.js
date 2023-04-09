import AddRecipeForm from '../components/AddRecipe/AddRecipeForm';
import PopularRecipe from '../components/AddRecipe/PopularRecipe';
import FollowUs from '../components/AddRecipe/FollowUs';
import {TitleFollowUs,WrapperFollowUs} from './AddREcipe.styled'

import MainSection from "../components/MainSection/MainSection"
const AddRecipe = () => {
    return (
        <div>
            <AddRecipeForm />
            <WrapperFollowUs>
                <TitleFollowUs>Follow us</TitleFollowUs>
                <FollowUs />
                <PopularRecipe />
                
                <MainSection/>
            </WrapperFollowUs>
          

        </div>
    )
 };

export default AddRecipe;