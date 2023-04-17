import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Block = styled.div`
  position: absolute; 
  top: 5.5%;
  right: 8%;
  width: 233px;
  height: 92px; 
  border-radius: 8px;
  background-color: ${props => props.theme.colors.background};
  padding: 8px 8px 30px 8px;
  
   @media (min-width: 768px) {
   
    top: 7.5%;
    right: 6%;
    width: 261px;        
    height: 100px;
    padding: 12px 12px 34px 12px;
    }

    @media (min-width: 1440px) {     
    width: 298px;
    height: 114px;
    padding: 16px;
    top: 11%;
    right: 11%;`


export const BlockText = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  width: 225px;
  letter-spacing: -0.24px;
  // padding: 3px;
  color:${props => props.theme.colors.textPrimary}; 
  
  & span {
    color: ${props => props.theme.colors.accentGreen}; 
    margin-right: 4px;  
    height: 92px;
  }
   @media screen and (max-width: 768px) {  

       
  }
    @media screen and (min-width: 1440px) {
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.24px;
    
    }`

   export const BlockLink = styled(NavLink)`
      display: flex;
      font-size: 10px;
      color: ${props => props.theme.colors.textPrimary}; 
      height: 25px;
      letter-spacing: 0.2px;     
      justify-content: flex-end;
      align-items: center;  
      margin-left: auto;
      cursor: pointer;            
      text-decoration: none;
      border: none;
      width: 209px;
      
      & span {
        margin-right: 4px; 
               
       }

        @media screen and (mix-width: 768px) { 
        width: 260px; 
        height: 3px;      
        font-size: 14px;
        line-height: 18px;
        letter-spacing: -0.24px;
        
      }
        @media screen and (min-width: 1440px) {
          font-size: 10px;
          line-height: 12px;
          height: 3px; 
                  }` 
