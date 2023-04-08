import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.01);
  z-index: 1200;
`;

export const ModalBox = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  position: absolute;
  top: 72px;
  right: 15%;
`;

export const Cont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid #8baa36;
  border-radius: 16px;
  padding-top: 18px;
  padding-left: 18px;
  padding-right: 18px;
  background-color: #fafafa;
  @media (min-width: 768px) {
    border-color: transparent;
  }
`;

export const EditText = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #23262a;
`;

export const EditBtn = styled.button`
  border: none;
  background-color: transparent;
`;

export const EditCont = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LogoutBtn = styled.button`
  border: none;
  background-color: #8baa36;
  padding: 40px 36px;
  clip-path: inset(25% 0 25% 0 round 15% 35% 15% 30%);
`;

export const LogoutText = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #fafafa;
  /* margin-right: 2px; */
`;

export const LogoutTextThumb = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
