import { useMediaQuery } from 'react-responsive';
import { LogoLight } from '../Logo/Logo';
import FollowUs from '../AddRecipe/FollowUs';
import Container from '../Container/Container';
import {
  FooterSection,
  Link,
  LogoCont,
  LogoText,
  FooterThumb,
  InfoList,
  InfoItem,
  ArrText,
  TermsText,
} from './Footer.styled';

export const Footer = () => {
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  return (
    <footer>
      <FooterSection>
        <Container>
          <FooterThumb>
            <LogoCont>
              <LogoLight />
              <LogoText>So Yummy</LogoText>
            </LogoCont>
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
          </FooterThumb>
        </Container>
      </FooterSection>
      <Container>
        <InfoList>
          <InfoItem>
            <ArrText>&copy; 2023 All Rights Reserved.</ArrText>
          </InfoItem>
          <InfoItem>
            <TermsText>Terms of Service</TermsText>
          </InfoItem>
        </InfoList>
      </Container>
    </footer>
  );
};
