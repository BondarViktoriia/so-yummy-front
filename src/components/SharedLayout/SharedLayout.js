import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { MainBox, Box } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Box>
      <Header />
      <MainBox>
        <Outlet />
      </MainBox>
      <Footer />
    </Box>
  );
};
