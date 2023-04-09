import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import Container from '../Container/Container';
import Title from '../Title/Title';
import { MainBox, Box } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Box>
      <Header />
      <Container>
        <Title>Title</Title>
      </Container>
      <MainBox>
        <Outlet />
      </MainBox>
      <Footer />
    </Box>
  );
};
