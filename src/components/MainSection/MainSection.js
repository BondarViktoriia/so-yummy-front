
import { useState, useEffect } from 'react';

import axios from "axios"
import MainItem from "./MainItem"
import { useMediaQuery } from 'react-responsive';


 const MainSection = () => {
  const [categories, setCategories] = useState([]);
  

  useEffect(() => {
      const getMainRecipes = async () => {
    try {
        const response = await axios.get(
            'https://so-yummy-7n94.onrender.com/api/recipes/main'
        )
        console.log("response",response)

        if (response) {
            setCategories(response.data)
        }
    } catch (error) {
console.log(error.message)
          }
        
      }
        getMainRecipes();
  },[])
  
     console.log("categories", categories)
     
         const isDesktop = useMediaQuery({ minWidth: 1440 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });

       let numCard;
    if (isDesktop) {
        numCard = 4;
    } else if (isTablet) {
        numCard = 2; 
    } else {
        numCard = 1; 
    }
   return (

       <div style={{display:"flex"}}>
           <h1>MAin Page</h1>

           <ul >
                  {categories && Object.entries(categories).map(([ category,meals]) => (
                      <li key={category}>
                        <h2>{category}</h2>

                          <ul>{meals.slice(0, numCard).map(meal => (
                                
                                  <MainItem key={meal._id } meal={meal} />                              ))
                          }</ul>
                           <button to={`/categories/${category}`}>
                See all
              </button>
                      </li>
                      
           ))}
           </ul>
           

           
           </div>
  );
}

      
    
 
export default MainSection;