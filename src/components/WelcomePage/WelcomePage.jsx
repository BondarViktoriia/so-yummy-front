import {
  WelcomeContent,
  BackgroundImg,
  WelcomeIcon,
  WelcomeTextFormat,
  WelcomeTitle,
  WelcomeText,
  ButtonGroup,
  ImgIcon,
} from './WelcomePage.styled';

import logo from '../../image/icons/logo-1x.png';
import { Button } from './Button';

const Welcome = () => {
  return (
    <>
      <BackgroundImg>
        <WelcomeContent>
          <WelcomeIcon />
          <ImgIcon src={logo} alt="" />

          <WelcomeTextFormat>
            <WelcomeTitle>Welcome to the app!</WelcomeTitle>
            <WelcomeText>
              This app offers more than just a collection of recipes - it is
              designed to be your very own digital cookbook. You can easily save
              and retrieve your own recipes at any time.
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
