


const MainItem = ({meal}) => {
    return (<div>
       <li key={meal._id}>
                <img src={meal.preview} alt="title" />
                <h5>{meal.title} </h5>
            </li>
    </div>
    )


}

export default MainItem