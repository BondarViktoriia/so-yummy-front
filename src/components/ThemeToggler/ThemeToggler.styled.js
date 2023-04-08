import styled from 'styled-components';

export const Switcher = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Checkbox = styled.input`
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
  &:checked + label > span {
    transform: translateX(30px);
  }
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 5px;
  gap: 10px;
  width: 61px;
  height: 28px;
  box-shadow: inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  cursor: pointer;
`;

export const Ball = styled.span`
  position: absolute;
  display: block;
  width: 21px;
  height: 21px;
  background-image: linear-gradient(to bottom, #ffffff 0%, #e8eaea 100%);
  border-radius: 50%;
  filter: drop-shadow(2px 1px 6px rgba(0, 0, 0, 0.25));
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
