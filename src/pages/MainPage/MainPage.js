import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const HeroSection = styled.section`   
    padding-top: 60px; 
    
    

  @media screen and (max-width: 768px) {
    padding-top: 160px; 
  }
  @media screen and (min-width: 1440px) {
      padding-top: 160px; 
  } `
export const Continer = styled.div`
    width: 1440px;
    margin-left: auto;
    margin-right: auto;`

export const HeroWrap = styled.div`  
    display: flex;
    justify-content: space-between;
    align-items: center; `    

export const HeroBox = styled.div`  
    position: relative `

export const ArrowPicture = styled.picture`  
    position: absolute;
    right: 0%;
    top: 79% `

export const HeroTitle = styled.h1`
    font-weight: 400;
    font-size: 100px;
    line-height: 100px;    
    letter-spacing: -0.005em;
    color: ##22252A;
    margin:0;
;
     span {
       color: #8BAA36; 
     }`

export const HeroText = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    width: 465px;
    letter-spacing: -0.02em;
    color: #23262A;
     margin:0;`

export const Form = styled.form`
    position: relative;
    height: 70px;
    margin-top: 50px;   
    border-radius: 15px 50px;
    border: 1px solid #F0F0F0;
    width: 500px;
   `

export const Input = styled.input`
    border: none;
    height: 60px;
    width: 355px;
    border-radius: 15px 50px;
    line-height: 24px;
    color: #F0F0F0;
    :focus-visible {
       outline: none;
    }`

                                                       
export const HeroButtont = styled.button`
    position: absolute; 
    clip-path: inset(25% 0px round 15% 35% 15% 30%);
    padding: 59px 53px;
    background-color: ${props => props.theme.colors.footer};
    color: rgb(250, 250, 250);
    border: none;
    top: -50%;
    right: -6px;`

export const SectionMain = styled.section`
  padding: 111px 0 118px 0;`
    

export const MainCategories = styled.ul`
      display: flex;
      margin: 0;
      padding:0;
      flex-direction: column;
      gap: 100px;     
       li{
      list-style-type: none;}
     
    `;

    export const MainList = styled.ul`   
    display: flex;
    flex-wrap: wrap;
   padding:0;
    gap: 15px;
    margin: 50px 0 50px 0;
    li{
      list-style-type: none;
      flex-basis: calc(100/4 - 30px);
    }`

    export const MainLi = styled.li`
    position: relative;
    width: 288px;
    border-radius: 8px;
    
    flex-basis: calc((100% - 60px) / 4);`

export const MainTitle = styled.h2` 
    margin: 0;   
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 44px;
    line-height: 44px;
    letter-spacing: -0.02em;
    color: ${props => props.theme.colors.title};`



    export const MainImageTitle = styled.div`
    position: absolute;
    bottom: 26px;
    left: 18px;
    width: 256px;
    height: 52px;
    padding: 16px;
    border-radius: 8px;
    background-color: background;
    font-weight: 500;
    font-size: 16px;  `

    export const MainImageText = styled.h5`
    
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.24px;
    color: #3E4462;
    margin:0;`

    export const MainImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover; `

    export const Link = styled(NavLink)`
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      width: 94px;
      height: 38px;
      background-color: #8AA936;
   
      border: none;
      color: #FAFAFA;    
     
      font-weight: 400;
      font-size: 14px;
      line-height: 1.29;
      border-radius: 6px;
      margin-left: auto;   
      text-decoration: none;
      
      &:hover,
      &:focus {
        background-color:#22252A;

        &.active {
      color:${props => props.theme.colors.accentGreen}; 
    }  
      }
    `
export const MainButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 195px;
  height: 46px;
  background-color: transparent;
  border-radius: 24px 44px;
  border: 2px solid #8AA936;
  color: #22252A;
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  margin: auto;  
  text-decoration: none;
  
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.background};
    background-color: ${props => props.theme.colors.accentGreen};
   
    
   &.active {
      color: ${props => props.theme.colors.accentGreen}; 
    
  }`
export const Block = styled.div`
  position: absolute;
  bottom: 99px;
  right: -54px;
  width: 298px;
  height: 114px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.background};
  padding: 8px 8px 11px 8px;`


export const BlockText = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.24px;
  color:#3E4462;
  margin: 0;
  padding: 0;
  & span {
    color: ${props => props.theme.colors.accentGreen}; 
    margin-right: 4px;  
  }`

   export const BlockLink = styled(NavLink)`
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: auto;
      cursor: pointer;
      width: 108px;
      height: 38px;        
      text-decoration: none;
      border: none;
      color: ${props => props.theme.colors.darkText}; 
      & span {
        margin-right: 4px;        
      } `
