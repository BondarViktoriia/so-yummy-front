import { useMediaQuery } from 'react-responsive';
import { LogoLight } from '../Logo/Logo';
import FollowUs from '../AddRecipe/FollowUs';
import Container from '../Container/Container';
import {
  FooterSection,
  Link,
  FooterNav,
  NavItem,
  LogoCont,
  LogoText,
  FooterThumb,
  DeskWrap,
  NavWrap,
  DescrCont,
  DescrList,
  DescrItem,
  FormCont,
  SubscrTitle,
  SubscrText,
  Form,
  InputCont,
  Input,
  LetterIcon,
  SubmitBtn,
  BtnText,
  FollowUsCont,
  InfoList,
  InfoItem,
  ArrText,
  TermsText,
} from './Footer.styled';

export const Footer = () => {
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  return (
    <footer>
      <FooterSection>
        <Container>
          <FooterThumb>
            <DeskWrap>
              <NavWrap>
                <DescrCont>
                  <LogoCont>
                    <LogoLight />
                    <LogoText>So Yummy</LogoText>
                  </LogoCont>
                  {isTabletOrDesktop && (
                    <DescrList>
                      <DescrItem>
                        Database of recipes that can be replenished{' '}
                      </DescrItem>
                      <DescrItem>
                        Flexible search for desired and unwanted ingredients
                      </DescrItem>
                      <DescrItem>
                        Ability to add your own recipes with photos
                      </DescrItem>
                      <DescrItem>Convenient and easy to use</DescrItem>
                    </DescrList>
                  )}
                </DescrCont>
                <FooterNav>
                  <ul>
                    <NavItem>
                      <Link to="/search">Ingredients</Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/add">Add recipes</Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/my">My recipes</Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/favorite">Favorite</Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/shopping-list">Shopping list</Link>
                    </NavItem>
                  </ul>
                </FooterNav>
              </NavWrap>
              <FormCont>
                {isDesktop && (
                  <div>
                    <SubscrTitle>Subscribe to our Newsletter</SubscrTitle>
                    <SubscrText>
                      Subscribe up to our newsletter. Be in touch with latest
                      news and special offers, etc.
                    </SubscrText>
                  </div>
                )}
                <Form>
                  <InputCont>
                    <LetterIcon />
                    <Input placeholder="Enter your email address" />
                  </InputCont>
                  <SubmitBtn type="submit">
                    <BtnText>Subcribe</BtnText>
                  </SubmitBtn>
                </Form>
              </FormCont>
            </DeskWrap>
            <FollowUsCont>
              <FollowUs />
            </FollowUsCont>
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
