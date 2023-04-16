import {MainLi, MainImage, MainImageTitle, MainImageText} from "./MainItem.styled"
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


const MainItem = ({ meal }) => {
    const location = useLocation();
    const {_id, preview, title}= meal
    return (<>
        <MainLi key={meal._id} >
             <Link to={`/recipe/${_id}`} state={{ from: location }}>
                <MainImage src={preview
                    ? preview
            : `../../image/recipe-page/recipe-img-tablet1x.png`} alt={title} />
                <MainImageTitle>
                    <MainImageText>{title}</MainImageText>
                </MainImageTitle>
            </Link>
            </MainLi>
    </>
    )


}

export default MainItem