import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const RecipeItem = ({ description, preview, id }) => {
  const location = useLocation();
  return (
    <li>
      <Link to={{ pathname: `/recipe/${id}` }} state={{ from: location }}>
        {preview && <img src={preview} alt={description} />}
        <h2 color="#fff">{description}</h2>
      </Link>
    </li>
  );
};
