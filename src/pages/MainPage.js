import Container from '../components/Container/Container';
import { SectionHero } from '../components/HeroSection/HeroSection';
import MainSection from '../components/MainSection/MainSection';
const MainPage = () => {
  return (
    <Container>
      <SectionHero />
      <MainSection />
    </Container>
  );
};

export default MainPage;
