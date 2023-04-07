import {
  WelcomeContent,
  BackgroundImg,
  WelcomeIcon,
  WelcomeTextFormat,
  WelcomeTitle,
  WelcomeText,
  ButtonGroup,
} from './WelcomePage.styled';

import logo from '../../image/icons/logo-1x.png';
import { Button } from './Button';

const Welcome = () => {
  return (
    <>
      <BackgroundImg>
        <WelcomeContent>
          <WelcomeIcon />
          <img src={logo} alt="" />

          <WelcomeTextFormat>
            <WelcomeTitle>Welcome to the app!</WelcomeTitle>
            <WelcomeText>
              Is not only a recipe app, it is, in fact, your cookbook. You can
              add your own recipes to save them for the future.
            </WelcomeText>
          </WelcomeTextFormat>

          <ButtonGroup>
            <Button
              look="rounded_dark"
              to="/register"
              fontSize="14px"
              fontSizeTablet="16px"
              width="132px"
              heigth="45px"
              widthTablet="184px"
              heigthTablet="67px"
            >
              Registration
            </Button>
            <Button
              look="rounded_transparent"
              to="/signin"
              fontSize="14px"
              fontSizeTablet="16px"
              width="95px"
              heigth="45px"
              widthTablet="184px"
              heigthTablet="67px"
            >
              Sign In
            </Button>
          </ButtonGroup>
        </WelcomeContent>
      </BackgroundImg>
    </>
  );
};

export default Welcome;
