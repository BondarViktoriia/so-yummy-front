import {MainLi, MainImage, MainImageTitle, MainImageText} from "./MainItem.styled"
import { useLocation,NavLink } from 'react-router-dom';

const MainItem = ({ meal }) => {
      const location = useLocation();
    return (<>
        <MainLi key={meal._id}>
           <NavLink to={`/recipe/${meal._id}`} state={{ from: location }}>
                <MainImage src={meal.preview} alt="title" />
            <MainImageTitle>
                <MainImageText>{meal.title}</MainImageText>
                </MainImageTitle>
                </NavLink>
            </MainLi>
    </>
    )


}

export default MainItem