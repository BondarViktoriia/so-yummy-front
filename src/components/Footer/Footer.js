import { useMediaQuery } from 'react-responsive';
import { LogoLight } from '../Logo/Logo';
import FollowUs from '../AddRecipe/FollowUs';
import { Link } from './Footer.styled';

export const Footer = () => {
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  return (
    <div>
      <div>
        <div>
          <LogoLight />
          <span>So Yummy</span>
        </div>
        {isTabletOrDesktop && (
          <ul>
            <li>Database of recipes that can be replenished </li>
            <li>Flexible search for desired and unwanted ingredients</li>
            <li>Ability to add your own recipes with photos</li>
            <li>Convenient and easy to use</li>
          </ul>
        )}
        <nav>
          <ul>
            <li>
              <Link to="/search">Ingredients</Link>
            </li>
            <li>
              <Link to="/add">Add recipes</Link>
            </li>
            <li>
              <Link to="/my">My recipes</Link>
            </li>
            <li>
              <Link to="/favorite">Favorite</Link>
            </li>
            <li>
              <Link to="/shopping-list">Shopping list</Link>
            </li>
          </ul>
        </nav>
        <form>
          <input />
          <button type="submit">Subcribe</button>
        </form>
        <FollowUs />
      </div>
      <div>
        <div>
          <span>&copy; 2023 All Rights Reserved.</span>
        </div>
        <div>
          <span>Terms of Service</span>
        </div>
      </div>
    </div>
  );
};
