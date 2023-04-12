import {
  HeroSection,
  HeroTitle,
  HeroWrap,
  HeroText,
  Form,
  Input, 
  HeroButtont,
  BgImgdesckTop,
  BgImgPlate,
  BgLeafdesckTop,
  BgImgArrow
} from './HeroSection.styled';
import Container from '../../components/Container/Container'
import { HealsyBlockRec } from './HealsyBlockRec';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
export const SectionHero = () => {
  const navigate = useNavigate(); 

  return (
    <HeroSection>
      <BgImgdesckTop/>
      <BgLeafdesckTop/>
      <BgImgPlate />
      <BgImgArrow/>
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
              <Formik>
              <Form>
                <Input type="text" />
                <HeroButtont type="submit">Search</HeroButtont>           
              </Form>
            </Formik>         
            <HealsyBlockRec />       
        </HeroWrap>
      </Container>
    </HeroSection>
  );
};
