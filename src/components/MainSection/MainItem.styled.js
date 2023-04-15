 import styled from 'styled-components';

export const MainLi = styled.li`
    position: relative;
    width: 100%;
    border-radius: 8px;
    
    @media (min-width: 768px) {
      width: 336px;
      height: 323px;
      flex-basis: calc((100% - 60px) / 2);
    }
    @media (min-width: 1440px) {
        width: 300px;
        height: 323px;
        flex-basis: calc((100% - 60px) / 4);
    }`

export const MainImageTitle = styled.div`
    width: 307px;
    min-height: 52px;
    background-color: ${props => props.theme.colors.listItemBcg};
    border-radius: 8px;
    position: absolute;
    bottom: 26px;
    display: inline-block;
    margin-left: 18px;
    margin-right: 18px;
    padding: 16px;
    display: flex;
    align-items: center; 
    

    @media (min-width: 768px) {
      width: 300px;
      min-height: 52px;
    }
    @media (min-width: 1440px) {
      width: 268px;
      min-height: 59px;
       
    } `

    export const MainImageText = styled.h5`    
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.24px;
    color: ${props => props.theme.colors.textPrimary};
    margin:0; `

    export const MainImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover; `

  