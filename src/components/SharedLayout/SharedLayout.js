import { Outlet } from 'react-router-dom';
import Container from '../Container/Container';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { MainBox } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <MainBox>
        <Outlet />
      </MainBox>
      <Footer />
    </Container>
  );
};
