import {MainLi, MainImage, MainImageTitle, MainImageText} from "./MainItem.styled"
import { useLocation } from 'react-router-dom';

import { Link } from 'react-router-dom';


const MainItem = ({ meal }) => {
      const location = useLocation();
    return (<>
        <MainLi key={meal._id} >
             <Link to={`/recipe/${meal._id}`} state={{ from: location }}>
            <MainImage src={meal.preview} alt="title" />
                <MainImageTitle>
                    <MainImageText>{meal.title}</MainImageText>
                </MainImageTitle>
            </Link>

            </MainLi>
    </>
    )


}

export default MainItem