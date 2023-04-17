import {
  HeroSection,
  HeroTitle,
  HeroWrap,
  HeroText, 
  BgImgdesckTop,
  BgImgPlate,
  BgLeafdesckTop,
  BgImgArrow 
} from './HeroSection.styled';
import Container from '../Container/Container';
import { HealsyBlockRec } from './HealsyBlockRec';
import { MainSearch } from "./MainSearch";

export const SectionHero = () => {


  return (
    <>    
      <BgImgdesckTop/>
      <BgLeafdesckTop/>
      <BgImgPlate />
      <BgImgArrow />
      <HealsyBlockRec />      
      <HeroSection>        
         <Container>
          <HeroWrap>
            <HeroTitle>
                <span>So</span>Yummy
              </HeroTitle>
              <HeroText>
                "What to cook?" is not only a recipe app, it is, in fact, your
                cookbook. You can add your own recipes to save them for the
                future.
            </HeroText>
          <MainSearch/>    
        </HeroWrap>
        </Container>
    </HeroSection>
    </>
  );
};
