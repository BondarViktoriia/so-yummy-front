import { useMediaQuery } from 'react-responsive';
import { Formik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import { subscrSchema } from '../../utilities/authValidationSchemas';
import { getPassErrorStatus } from '../../services/auth/errorStatus';
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
  SubscrForm,
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
  BgImg,
  BgUpImg,
  BgUpImgThumb,
  ErrorCont,
  FormThumb,
} from './Footer.styled';

import BgUpMob from '../../image/footer/bgc-up-mob.png';
import BgUpTab from '../../image/footer/bgc-up-tab.png';
import BgUpDesk from '../../image/footer/bgc-up-desk-new.png';

export const Footer = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  const handleSubmit = (values, { resetForm }) => {
    toast.success('You have successfully subscribed to the newsletter!');
    resetForm();
  };

  return (
    <footer>
      <FooterSection>
        <Container>
          <BgUpImgThumb>
            {isMobile && <BgUpImg src={`${BgUpMob}`} alt="img" />}
            {isTablet && <BgUpImg src={`${BgUpTab}`} alt="img" />}
            {isDesktop && <BgUpImg src={`${BgUpDesk}`} alt="img" />}
          </BgUpImgThumb>
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
                <Formik
                  initialValues={{
                    email: '',
                  }}
                  validationSchema={subscrSchema}
                  validateOnBlur
                  onSubmit={handleSubmit}
                >
                  {({ errors, touched, isValid, dirty }) => (
                    <SubscrForm autoComplete="off">
                      <FormThumb>
                        <InputCont htmlFor="email">
                          <LetterIcon
                            color={
                              touched.email &&
                              getPassErrorStatus(errors.email, dirty)
                            }
                          />
                          <Input
                            type="email"
                            placeholder="Enter your email address"
                            name="email"
                            color={
                              touched.email &&
                              getPassErrorStatus(errors.email, dirty)
                            }
                          />
                        </InputCont>
                        <SubmitBtn type="submit">
                          <BtnText>Subscribe</BtnText>
                        </SubmitBtn>
                      </FormThumb>
                      <ErrorCont name="email" component="div" />
                    </SubscrForm>
                  )}
                </Formik>
              </FormCont>
            </DeskWrap>
            <FollowUsCont>
              <FollowUs />
            </FollowUsCont>
          </FooterThumb>
        </Container>
        <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
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
        <BgImg />
      </Container>
    </footer>
  );
};
