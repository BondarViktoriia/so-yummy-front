import { RecipeItem } from './RecipeItem';
import {List} from './SearchList.styled'

export const SearchList = ({ isLoading, results }) => {
  return (
    <List>
      {results.map(({ title, _id, preview }) => (
        <RecipeItem
          key={_id}
          id={_id}
          title={title}
          preview={preview}
        />
      ))}
    </List>
  );
};