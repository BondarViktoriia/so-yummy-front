import {
  WelcomeContent,
  BackgroundImg,
  WelcomeIcon,
  WelcomeTextFormat,
  WelcomeTitle,
  WelcomeText,
  ButtonGroup,
  RegistrationButton,
} from './WelcomePage.styled';

const Welcome = () => {
  return (
    <>
      <BackgroundImg>
        <WelcomeContent>
          <WelcomeIcon />

          <WelcomeTextFormat>
            <WelcomeTitle>Welcome to the app!</WelcomeTitle>
            <WelcomeText>
              Is not only a recipe app, it is, in fact, your cookbook. You can
              add your own recipes to save them for the future.
            </WelcomeText>
          </WelcomeTextFormat>
          <div>
            <ButtonGroup>
              <RegistrationButton></RegistrationButton>
              <button />
            </ButtonGroup>

            <button></button>
          </div>
        </WelcomeContent>
      </BackgroundImg>
    </>
  );
};

export default Welcome;
