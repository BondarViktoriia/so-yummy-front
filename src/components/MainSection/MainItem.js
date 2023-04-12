import {MainLi, MainImage, MainImageTitle, MainImageText} from "./MainItem.styled"

const MainItem = ({ meal }) => {
    return (<>
       <MainLi key={meal._id}>
                <MainImage src={meal.preview} alt="title" />
            <MainImageTitle>
                <MainImageText>{meal.title}</MainImageText>
            </MainImageTitle>
            </MainLi>
    </>
    )


}

export default MainItem