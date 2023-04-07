import {RecipeItem} from './RecipeItem'

export const SearchList = ({ isLoading, results }) => {

    return (
      <ul>
        {results.map(({ description, _id, preview }) => (
          <RecipeItem id={_id} description={description} preview={preview}/>
        ))}
      </ul>
    );
  };