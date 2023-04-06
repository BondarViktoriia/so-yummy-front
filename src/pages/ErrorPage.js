import Container from 'components/Container/Container';
import Title from 'components/Title/Title';
import { ErrorCont, TextError, ImgCont } from './Error/Error.styled';
import errorMob1 from '../image/error-page/error-mobile-1x.png';
import errorMob2 from '../image/error-page/error-mobile-2x.png';
import errorTablet1 from '../image/error-page/error-tablet-1x.png';
import errorTablet2 from '../image/error-page/error-tablet-2x.png';
import errorDesktop1 from '../image/error-page/error-dekstop-1x.png';
import errorDesktop2 from '../image/error-page/error-desktop-2x.png';

const ErrorPage = () => {
  return (
    <ErrorCont>
      <Container>
        <Title></Title>
        <ImgCont>
          <picture>
            <source
              media="(min-width: 1440px)"
              srcSet={`${errorDesktop1}, ${errorDesktop2} 2x`}
            />
            <source
              media="(min-width: 768px)"
              srcSet={`${errorTablet1}, ${errorTablet2} 2x`}
            />
            <img
              src={errorMob1}
              srcSet={`${errorMob1}, ${errorMob2} 2x`}
              alt="Ошибка"
            />
          </picture>
        </ImgCont>
        <TextError>
          <h3>We are sorry,</h3>
          <p>but the page you were looking for can’t be found..</p>
        </TextError>
      </Container>
    </ErrorCont>
  );
};

export default ErrorPage;
