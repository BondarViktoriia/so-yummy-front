import styled from 'styled-components';

export const WelcomeContent = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
`;

export const BackgroundImg = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 58.58%,
      rgba(0, 0, 0, 0.345172) 78.98%,
      rgba(0, 0, 0, 0) 100%
    ),
    url('../../image/start-page/auth-illustration-dekstop-1x.png');
`;

export const WelcomeIcon = styled.div`
  width: 54px;
  height: 54px;
  margin: 0 auto 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WelcomeTextFormat = styled.div`
  margin: 0 auto 40px;
  text-align: center;
  max-width: 305px;
`;

export const WelcomeTitle = styled.div`
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;
  /* color:*/
  margin-bottom: 14px;
`;

export const WelcomeText = styled.div`
  /* color:  */
  font-size: 14px;
  line-height: 1.3;
  text-align: center;
  letter-spacing: -0.02em;
`;

export const ButtonGroup = styled.div`
  width: 239px;
  display: flex;
  gap: 12px;
  margin: 0 auto;
`;

export const RegistrationButton = styled.div`
  width: 132px;
  height: 45px;
  font-size: 14px;
  font-size: inherit;
  line-height: 1.5;
`;
