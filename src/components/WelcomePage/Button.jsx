import { ButtonStyled, LinkStyled } from './Button.styled';

export const Button = ({
  type,
  to,
  children,
  look,
  width,
  widthTablet,
  widthDesktop,
  heigth,
  heigthTablet,
  heigthDesktop,
  fontSize,
  fontSizeTablet,
  fontSizeDesktop,
}) => {
  if (to) {
    return (
      <LinkStyled
        to={to}
        type={type}
        width={width}
        height={heigth}
        look={look}
        fontSize={fontSize}
      >
        {children}
      </LinkStyled>
    );
  }
  return (
    <ButtonStyled
      type={type}
      width={width}
      height={heigth}
      look={look}
      fontSize={fontSize}
    >
      {children}
    </ButtonStyled>
  );
};
