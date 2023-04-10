import {
  TitleS,
  TitleWrap,
  LeftSquare,
  CenterSquare,
  RightSquare,
} from './Title.styled';

const Title = ({ children }) => {
  return (
    <TitleWrap>
      <LeftSquare></LeftSquare>
      <CenterSquare></CenterSquare>
      <RightSquare></RightSquare>
      <TitleS>{children}</TitleS>
    </TitleWrap>
  );
};

export default Title;
