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

export const SearchList = ({ isLoading, results }) => {
  return (
    <ul>
      {results.map(({ description, _id, preview }) => (
        <RecipeItem
          key={_id}
          id={_id}
          description={description}
          preview={preview}
        />
      ))}
    </ul>

  );
};
