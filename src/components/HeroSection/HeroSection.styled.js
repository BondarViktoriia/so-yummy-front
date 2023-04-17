import styled from 'styled-components';
import bgdekstop1 from '../../image/home-page/home-bg-1x.png';
import bgtablet1 from '../../image/home-page/bgtablet-1x.png';
import mobile1 from '../../image/home-page/home-bg-mobile-1x.png';
import dekleaf1 from '../../image/home-page/deskspinach-1x.png';
import tableaf1 from '../../image/home-page/tabkspinach-1x.png';
import mobleaf1 from '../../image/home-page/mobilspinach-1x.png';
import platedekstop1 from '../../image/home-page/plate-dekstop-1x.png';
import platetablet1 from '../../image/home-page/plate-tablet-1x.png';
import platemobile1 from '../../image/home-page/plate-mobile-1x.png';
import arrowdekstop1 from '../../image/home-page/arrow-dekstop-1x.png';
import arrowtablet1 from '../../image/home-page/arrow-tablet-1x.png';


export const HeroSection = styled.section`
  padding: 132px 0 83px 0;

  background: ${props => props.theme.colors.background};

  @media screen and (min-width: 768px) {
    padding: 204px 0 195px 0;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 226px;
  }
`;



export const BgImgdesckTop = styled.div`

  background-image: url('${mobile1}');
  background-size: cover;
  background-position: right top;
  background-repeat: no-repeat;
  position: absolute;
  top: 125px;
  right: 0;
  width: 269px;
  height: 678px;

  @media (min-width: 768px) {  
    background-image: url('${bgtablet1}');
    top: 0;
    right: 0;   
    width: 332px;
    height: 640px;
  }
  @media (min-width: 1440px) {
    background-image: url('${bgdekstop1}');
    width: 725px;
    height: 689px;   
    top: 0;
    right: 0;
  }
`;

export const BgLeafdesckTop = styled.div`
  background-image: url('${mobleaf1}');
  background-size: cover;
  background-position: right top;
  background-repeat: no-repeat;
  position: absolute;
  top: 83px;
  right: 0;
  width: 375px;
  height: 814px;

  @media (min-width: 768px) {
    
    background-image: url('${tableaf1}');
    width: 583px;
    height: 640px;
    top: 0;
    right: 0;
    
  }
  @media (min-width: 1440px) {
    background-image: url('${dekleaf1}');
    width: 913px;
    height: 780px;
    top: 0;
    right: 0;
   
    
  }
`;

export const BgImgPlate = styled.div`
  background-image: url('${platemobile1}');
  background-size: cover;
  background-position: right top;
  background-repeat: no-repeat;
  position: absolute;
  
  top: 4%;
  right: 7%;
  width: 320px;
  height: 296px;

  @media (min-width: 768px) {
     max-width: 768px;
    background-image: url('${platetablet1}');
    width: 368px;
    height: 351px;   
    top: 3%;
     right: 0;
  }
  @media (min-width: 1440px) {
     max-width: 1440px;
    background-image: url('${platedekstop1}');
    width: 578px;
    height: 539px;   
    top: 3%;
     right: 16%;
  }
`;

export const BgImgArrow = styled.div`
  background-image: url('${arrowtablet1}');
  background-size: cover;
  background-position: right top;
  background-repeat: no-repeat;
  position: absolute;
  top: 9%;
  right: 8%;
  width: 186px;
  height: 115px;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
  @media (min-width: 1440px) {
    background-image: url('${arrowdekstop1}');    
    top: 13%;
    right: 13%;
    width: 186px;
    height: 148px;
  }
`;

export const HeroWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;

  @media screen and (min-width: 768px) {
    align-items: baseline;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 100px;
    padding-right: 100px;
  }
`;

export const HeroTitle = styled.h1`
  font-weight: 400;
  font-size: 72px;
  line-height: 60px;
  text-align: center;
  letter-spacing: -0.005em;
  color: ${props => props.theme.colors.footer};
  margin-bottom: 14px;
  text-align: center;

  span {
    color: #8baa36;
  }

  @media screen and (min-width: 768px) {
    width: 364px;
    font-size: 72px;
    letter-spacing: -0.005em;
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 100px;
    letter-spacing: -0.005em;
    line-height: 72px;
  }
`;

export const HeroText = styled.p`
  width: 248px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  margin-bottom: 364px;
  text-align: center;

  color: ${props => props.theme.colors.darkText};

  @media screen and (min-width: 768px) {
    width: 362px;
    text-align: inherit;
    margin-bottom: 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 465px;
    margin-bottom: 50px;
    font-size: 18px;
    line-height: 24px;
  }
`;

export const Form = styled.form`
  position: relative; 
  border-radius: 15px 50px;
  border: 1px solid #f0f0f0; 
`;

export const Input = styled.input`
  border: none;
  width: 295px;
  height: 52px;
  padding: 17px 32px;
  border-radius: 15px 50px;  
  font-size: 12px;
  line-height: 18px;
  font-style: normal;
  font-weight: 400;
  
  letter-spacing: 0.5px;
  background: ${props => props.theme.colors.background};
  color: #BDBDBD; 
  :focus-visible {
    outline: none;
  }
  @media screen and (min-width: 768px) {
    width: 369px;
    line-height: 24px;
    font-size: 16px;  
  }
  @media screen and (min-width: 1440px) {
    width: 510px;
  }
`;

export const HeroButtont = styled.button`
  position: absolute;
  clip-path: inset(25% 0px round 15% 35% 15% 30%);
  padding: 47px 37px;
  background-color: ${props => props.theme.colors.footer};
  color: rgb(250, 250, 250);
  border: none;
  top: -29px;
  right: -5px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;
