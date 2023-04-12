 import styled from 'styled-components';

export const MainLi = styled.li`
    position: relative;
    width: 100%;
    border-radius: 8px;
    
    @media (min-width: 768px) {
      flex-basis: calc((100% - 60px) / 2);
    }
    @media (min-width: 1440px) {
        width: 288px;
        flex-basis: calc((100% - 60px) / 4);
    }`

    export const MainImageTitle = styled.div`
    position: absolute;
    bottom: 26px;
    left: 59px; 
    width: 256px;
    height: 52px;
    padding: 16px;
    border-radius: 8px;
    background-color: background;
    font-weight: 500;
    font-size: 16px;
    

    @media (min-width: 768px) {
      
    }
    @media (min-width: 1440px) {
       left: 18px; 
    } `

    export const MainImageText = styled.h5`    
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.24px;
    color: #3E4462;
    margin:0; `

    export const MainImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover; `