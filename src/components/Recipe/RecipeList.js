import {
  Wrapper,
  ListTitle,
  StyledSpan,
  ListItemStyled,
  ListStyled,
  Thumb,
  Image,
  WrapForContent,
  TitleIngred,
  MeasureStyled,
  OriginalCheckbox,
} from './RecipeList.styled';

const RecipeList = ({ ingreds }) => {
  return (
    <Wrapper>
      <ListTitle>
        <StyledSpan>Ingredients</StyledSpan>
        <StyledSpan>Number</StyledSpan>
        <StyledSpan>Add to list</StyledSpan>
      </ListTitle>
      <ListStyled>
        {ingreds.map(({ _id, ttl, thb, measure }) => {
          return (
            <ListItemStyled key={_id}>
              <WrapForContent>
                <Thumb>
                  <Image src={thb} alt={ttl}></Image>
                </Thumb>

                <TitleIngred>{ttl}</TitleIngred>
              </WrapForContent>
              <WrapForContent>
                <MeasureStyled>{measure ?? '3 tbs'}</MeasureStyled>
                <OriginalCheckbox type="checkbox"></OriginalCheckbox>
              </WrapForContent>
            </ListItemStyled>
          );
        })}
      </ListStyled>
    </Wrapper>
  );
};

export default RecipeList;
