import { HeroSection, HeroTitle, HeroWrap, HeroText,Form, Input, HeroBox, ArrowPicture,HeroButtont} from './MainPage'
import {HealsyBlockRec} from "./HealsyBlockRec"
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
// import desckTop1 from '../../image/home-page/home-bg-1x.png';
// import tablet2 from ' ../../image/home-page/home-bg-tablet-2x.png';
// import mobile1 from '../../image/home-page/home-bg-mobile-1x.png';
// import mobile2 from '../../image/home-page/home-bg-mobile-2x.png';
import platedekstop1 from '../../image/home-page/plate-dekstop-1x.png';
import platedekstop2 from '../../image/home-page/plate-dekstop-2x.png';
import platetablet1 from '../../image/home-page/plate-tablet-1x.png';
import platetablet2 from '../../image/home-page/plate-tablet-2x.png';
import platemobile1 from '../../image/home-page/plate-mobile-1x.png';
import platemobile2 from '../../image/home-page/plate-mobile-1x.png';
import arrowdekstop1 from '../../image/home-page/arrow-dekstop-1x.png';
import arrowdekstop2 from '../../image/home-page/arrow-dekstop-2x.png';
import arrowtablet1 from '../../image/home-page/arrow-tablet-1x.png';
import arrowtablet2 from '../../image/home-page/arrow-tablet-2x.png';




export const SectionHero = () => {
    const navigate = useNavigate();
    

    const  initialValues = {
        search: ""
    }

    const handleFormSubmit = (values, actions) => {
        navigate(`/Search/ingredients`)
    }

    
    return (
        <HeroSection>               
                    <HeroWrap>
                        <HeroBox>
                            < HeroTitle><span>So</span>Yummy</ HeroTitle>
                            <HeroText>
                                "What to cook?" is not only a recipe app, it is, in fact, your cookbook. You can add your own recipes to save them for the future.
                        </HeroText>
                        <Formik  initialValues= {initialValues} onSubmit={handleFormSubmit}>
                            <Form >
                                <Input type="text" />
                                <HeroButtont type="submit">Search</HeroButtont>  
                                 navigate()
                            </Form>
                        </Formik>
                        </HeroBox>
                    <HeroBox>
                        <HealsyBlockRec/>
                             {/* <picture>
                                <source
                                    srcSet={`${desckTop1}`}                                                                         
                                    media="(min-width: 1440px)"/>
                                <source
                                    srcSet={`${tablet2} 2x`}
                                    media="(min-width: 768px)"/>
                                                   
                                <source
                                    srcSet={`${mobile1}` `${mobile2} 2x`}
                                    media="(min-width: 320px)"/>              
                                                    
                                <img
                                    src={desckTop1}
                                    srcSet={`${desckTop1}`}        
                                    alt="backgraund"
                                    width="941"
                                    height="912"
                                    />
                            </picture> */}
                             {/* <picture>
                                    <source srcSet="../../image/shared-layout/spinach-right-dekstop-1x.png,
                                                    ../../image/shared-layout/spinach-right-dekstop-2x.png"
                                                     media="(min-width: 1440px)"/>
                                    <source srcSet="../../image/shared-layout/spinach-right-tablet-1x.png,
                                                    ../../image/shared-layout/spinach-right-tablet-2x.png"
                                                    media="(min-width: 768px)"/>
                                    <source srcSet="../../image/shared-layout/spinach-right-mobile-1x.png,
                                                    ../../image/shared-layout/spinach-right-mobile-2x.png"
                                                     media="(min-width: 320px)"/>
                                    <img src="../../image/shared-layout/spinach-right-dekstop-1x.png" alt="spinach" width="913" height="800"/>
                            </picture> */}
                        <picture>
                              <source
                                    srcSet={`${platedekstop1}, ${platedekstop2} 2x`}                                                                         
                                    media="(min-width: 1440px)"/>
                                <source
                                    srcSet={`${platetablet1}, ${platetablet2} 2x`}
                                    media="(min-width: 768px)"/>
                                                   
                                <source
                                    srcSet={`${platemobile1}, ${platemobile2} 2x`}
                                    media="(min-width: 320px)"/>              
                                                    
                                <img
                                    src={platedekstop1}
                                    srcSet={`${platedekstop1}`}        
                                    alt="plate with vegetables"
                                    width="567"
                                    height="539"
                                    />                             
                            </picture>
                        <ArrowPicture>
                             <source
                                    srcSet={`${arrowdekstop1}, ${arrowdekstop2} 2x`}                                                                         
                                    media="(min-width: 1440px)"/>
                                <source
                                srcSet={`${arrowtablet1}, ${arrowtablet2} 2x`}
                                
                                    media="(min-width: 768px)"/>                                
                                                    
                                <img
                                    src={arrowdekstop1}
                                    srcSet={`${arrowdekstop1}`}        
                                    alt="green arrow"
                                    width="175"
                                    height="107"
                                    />                               
                            </ArrowPicture>
                        </HeroBox>
                    </HeroWrap>                
            </HeroSection>
    )
} 