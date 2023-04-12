import {MainLi, MainImage, MainImageTitle, MainImageText} from "./MainItem.styled"
// import { Link } from 'react-router-dom';

const MainItem = ({ meal }) => {
    return (<>
        <MainLi key={meal._id}>
             {/* <Link to={`/recipe/:id`} state={{ from: '/' }}> */}
            <MainImage src={meal.preview} alt="title" />
                <MainImageTitle>
                    <MainImageText>{meal.title}</MainImageText>
                </MainImageTitle>
            {/* </Link> */}
            </MainLi>
    </>
    )


}

export default MainItem