import styled from 'styled-components';
import bgdekstop1 from '../../image/home-page/home-bg-1x.png';
// import bgdekstop2 from '../../image/home-page/home-bg-2x.png';
import bgtablet1 from '../../image/home-page/bgtablet-1x.png';
// import bgtablet2 from '../../image/home-page/home-bg-tablet-2x.png';
import mobile1 from '../../image/home-page/home-bg-mobile-1x.png';
// import mobile2 from '../../image/home-page/home-bg-mobile-2x.png';

import dekleaf1 from '../../image/home-page/deskspinach-1x.png';
// import dekleaf2 from '../../image/home-page/deskspinach-2x.png';
import tableaf1 from '../../image/home-page/tabkspinach-1x.png';
// import tableaf2 from '../../image/home-page/tabkspinach-2x.png';
import mobleaf1 from '../../image/home-page/mobilspinach-1x.png';
// import mobleaf2 from '../../image/home-page/mobilspinach-2x.png';


import platedekstop1 from '../../image/home-page/plate-dekstop-1x.png';
// import platedekstop2 from '../../image/home-page/plate-dekstop-2x.png';
import platetablet1 from '../../image/home-page/plate-tablet-1x.png';
// import platetablet2 from '../../image/home-page/plate-tablet-2x.png';
import platemobile1 from '../../image/home-page/plate-mobile-1x.png';
// import platemobile2 from '../../image/home-page/plate-mobile-1x.png';

import arrowdekstop1 from '../../image/home-page/arrow-dekstop-1x.png';
// import arrowdekstop2 from '../../image/home-page/arrow-dekstop-2x.png';
import arrowtablet1 from '../../image/home-page/arrow-tablet-1x.png';
// import arrowtablet2 from '../../image/home-page/arrow-tablet-2x.png';


export const HeroSection = styled.section`   
    padding: 132px 0 83px 0; 
   
    background: ${props => props.theme.colors.background};   

    @media screen and (min-width: 768px) {
      padding: 204px 0 195px 0; 
    }
    @media screen and (min-width: 1440px) {
      padding-top: 160px; 
    } `


    export const BgImgdesckTop = styled.div`
    background-image: url('${mobile1}');
    background-size: cover;
    background-position: right top;
    background-repeat: no-repeat;
    position: absolute;
    top: 162px;
    left: 107px;
    width: 269px;
    height: 678px;

    @media (min-width: 768px) {
        background-image: url('${bgtablet1}');
        top: 0;
        left: 438px;
        width: 332px;
        height: 640px;
    }
    @media (min-width: 1440px) {
        background-image: url('${bgdekstop1}');
        width: 725px;
        height: 689px;
        top: 0;
        left: 715px;
    }`

    export const BgLeafdesckTop = styled.div`
    background-image: url('${mobleaf1}');
    background-size: cover;
    background-position: right top;
    background-repeat: no-repeat;
    position: absolute;
    top: 104px;
    left: 0px;
    width: 375px;
    height: 814px;
    
    @media (min-width: 768px) {
        background-image: url('${tableaf1}');
        width: 583px;
        height: 640px;
        top: 0px;
        left: 186px;
        }
    @media (min-width: 1440px) {
        background-image: url('${dekleaf1}');
        width: 913px;
        height: 780px;
        top: 18px;
        left: 528px;
        
    }`

    export const BgImgPlate = styled.div`
    background-image: url('${platemobile1}');
    background-size: cover;
    background-position: right top;
    background-repeat: no-repeat;
    position: absolute;
    top: 324px;
    left: 26px;
    width: 320px;
    height: 296px;
    
    @media (min-width: 768px) {
        background-image: url('${platetablet1}');
        width: 368px;
        height: 351px;
        top: 193px;
        left: 401px;
    }
    @media (min-width: 1440px) {
        background-image: url('${platedekstop1}');
        width: 578px;
        height: 539px;
        top: 105px;
        left: 575px;
    }`

export const BgImgArrow = styled.div`
    background-image: url('${arrowtablet1}');
    background-size: cover;
    background-position: right top;
    background-repeat: no-repeat;
    position: absolute;
    top: 467px;
    right: 61px;
    width: 186px;
    height: 115px;
    display: none;
    
    @media (min-width: 768px) {
    display: block;
    }
    @media (min-width: 1440px) {
    background-image: url('${arrowdekstop1}');  
    top: 542px;
    right: 346px;
    width: 186px;
    height: 148px;
}`


export const HeroWrap = styled.div`  
    position: relative;
    display: flex;
    flex-direction: column;   
    align-items: center;

    @media screen and (min-width: 768px) {
      align-items: baseline;
  }

     @media screen and (min-width: 1440px) {
      
  }`    



export const HeroTitle = styled.h1`
    font-weight: 400;
    font-size: 72px;
    line-height: 60px;
    text-align: center;
    letter-spacing: -0.005em;
    color: ${props => props.theme.colors.footer};   
    margin-bottom:  14px;
    text-align: center;

     span {
       color: #8BAA36; 
     }

     @media screen and (min-width: 768px) {
        width: 364px
        font-size: 100px;
        letter-spacing: -0.005em;
        margin-bottom: 24px;
  }
     @media screen and (min-width: 1440px) {
        font-size: 100px;
        letter-spacing: -0.005em;
        line-height: 72px;
        margin-bottom: 14px;
  }`



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
       
    }`


export const Form = styled.form`
    position: relative;
    // width: 295px;
    // height: 52px;
    // margin-top: 50px;   
    border-radius: 15px 50px;
    border: 1px solid #F0F0F0;
   

    @media screen and (min-width: 768px) {        
        width: 369px;
  }
    @media screen and (min-width: 1440px) {
        width: 510px;
    }`


export const Input = styled.input`
    border: none;
    width: 295px;
    height: 52px;
    padding: 17px 32px;
    border-radius: 15px 50px;
    line-height: 24px;
    background: ${props => props.theme.colors.background}; 
    color:${props => props.theme.colors.userLogo}; 
    :focus-visible {
       outline: none;
    }
     @media screen and (min-width: 768px) {        
        width: 369px;
  }
    @media screen and (min-width: 1440px) {
        width: 510px;
    }`

                                                       
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
     
    }`