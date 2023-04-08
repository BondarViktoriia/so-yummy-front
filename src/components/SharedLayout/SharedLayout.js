import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { MainBox, Box,SharedLayoutBg,SharedLayoutContainer } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Box>
      <SharedLayoutContainer>
      <SharedLayoutBg>
              <Header />
      <MainBox>
        <Outlet />
      </MainBox>
      <Footer />
      </SharedLayoutBg>
      </SharedLayoutContainer>


    </Box>
  );
};
