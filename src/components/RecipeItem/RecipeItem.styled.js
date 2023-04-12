import styled from 'styled-components';

export const Item = styled.li`
  position: relative;
  display: flex;
  gap: 15px;
  padding: 15px;
  border-radius: 8px;
  background: ${p => p.theme.colors.listItemBcg};
  @media (min-width: 768px) {
    gap: 24px;
    padding: 28px 24px;
  }
  @media (min-width: 1440px) {
    gap: 40px;
    padding: 40px;
  }
`;

export const RecipePic = styled.img`
  width: 124px;
  height: 124px;
  object-fit: cover;
  border-radius: 8px;
  @media (min-width: 768px) {
    width: 228px;
    height: 232px;
  }
  @media (min-width: 1440px) {
    width: 318px;
    height: 324px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const RecipeTitle = styled.h2`
  margin-bottom: 15px;
  max-width: 145px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.textPrimary};
  @media (min-width: 768px) {
    margin-bottom: 28px;
    max-width: none;
    font-size: 24px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 40px;
  }
`;

export const RecipeText = styled.p`
 max-width: 163px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  font-weight: 400;
  font-size: 8px;
  line-height: 1.25;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.darkText};
  &:first-child {
    margin-bottom: 15px;
    -webkit-line-clamp: 4;
  }
  @media (min-width: 768px) {
    max-width: 353px;
    font-size: 14px;
    line-height: 1.29;
  }
  @media (min-width: 1440px) {
    max-width: 679px;
    display: block;
    font-size: 18px;
    line-height: 1.33;
  }
`;
export const RecipeTime = styled.p`
 /* max-width: 163px; */
     text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  font-weight: 400;
  font-size: 8px;
  line-height: 1.25;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.darkText};
  &:first-child {
    margin-bottom: 15px;
    -webkit-line-clamp: 4;
  }
  @media (min-width: 768px) {
    /* max-width: 353px; */
    font-size: 14px;
    line-height: 1.29;
  }
  @media (min-width: 1440px) {
    /* max-width: 679px; */
    display: block;
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const DeleteButtonFav = styled.button`
  position: absolute;
  cursor: pointer;
  right: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: ${p => p.theme.colors.deleteIcon};
  border-radius: 4px;
  border: transparent;
  color: ${p => p.theme.colors.darkText};
  transition: all 0.25s ease-out;
  & svg {
    width: 24px;
    height: 24px;
  }
  &:hover,
  &:focus {
    background: ${p => p.theme.colors.accentGreen};
    color: ${p => p.theme.colors.footerText};
  }
  @media (min-width: 768px) {
    top: 28px;
    right: 24px;
    width: 38px;
    height: 38px;
  }
  @media (min-width: 1440px) {
    top: 40px;
    right: 40px;
    width: 44px;
    height: 44px;
  }
`;

export const DeleteButtonMy = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: ${p => p.theme.colors.accentGreen};
  border-radius: 4px;
  border: transparent;
  color: ${p => p.theme.colors.background};
  transition: all 0.25s ease-out;
  &:hover,
  &:focus {
    background: ${p => p.theme.colors.footer};
  }
  @media (min-width: 768px) {
    top: 28px;
    right: 24px;
    width: 38px;
    height: 38px;
  }
  @media (min-width: 1440px) {
    top: 40px;
    right: 40px;
    width: 44px;
    height: 44px;
  }
`;

export const RecipeButtonFav = styled.button`
  position: absolute;
  cursor: pointer;
  bottom: 14px;
  right: 14px;
  width: 87px;
  height: 27px;
  background: ${p => p.theme.colors.footer};
  font-weight: 400;
  font-size: 10px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.footerText};
  border-radius: 24px 44px;
  border: transparent;
  transition: background 0.25s ease-out;
  &:hover,
  &:focus {
    background: ${p => p.theme.colors.accentGreen};
  }
  @media (min-width: 768px) {
    bottom: 28px;
    right: 24px;
    width: 138px;
    height: 45px;
    font-size: 14px;
  }
  @media (min-width: 1440px) {
    bottom: 40px;
    right: 40px;
    width: 160px;
    height: 54px;
    font-size: 16px;
  }
`;

export const RecipeButtonMy = styled.button`
  position: absolute;
  bottom: 14px;
  right: 14px;
  width: 87px;
  height: 27px;
  background: ${p => p.theme.colors.accentGreen};
  font-weight: 400;
  font-size: 10px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.background};
  border-radius: 24px 44px;
  border: transparent;
  transition: background 0.25s ease-out;
  &:hover,
  &:focus {
    background: ${p => p.theme.colors.footer};
  }
  @media (min-width: 768px) {
    bottom: 28px;
    right: 24px;
    width: 138px;
    height: 45px;
    font-size: 14px;
  }
  @media (min-width: 1440px) {
    bottom: 40px;
    right: 40px;
    width: 160px;
    height: 54px;
    font-size: 16px;
  }
`;
