import {
  Wrapper,
  Title,
  ListOfInstructions,
  ListItem,
  GreenCircle,
  Thumb,
  ImageRecipe,
} from './RecipePreparation.styled';
import RecipeImgPlaceholder from '../../image/recipe-page/recipe-img-tablet2x.png';

const RecipePreparation = ({ instructions, image }) => {
  const instructionsArray = instructions.split('\n');

  for (let i = 0; i < instructionsArray.length; i += 1) {
    const regex = /^(?:\d+[.)]*\s*)*/;
    instructionsArray[i] = instructionsArray[i].replace(regex, '').trim();
  }
  const filteredInstructions = instructionsArray.filter(str => str !== '');

  return (
    <Wrapper>
      <div>
        <Title>Recipe Preparation</Title>
        <ListOfInstructions>
          {filteredInstructions.map((step, i) => {
            return (
              <ListItem key={crypto.randomUUID()}>
                <GreenCircle>{i + 1}</GreenCircle>
                {step}
              </ListItem>
            );
          })}
        </ListOfInstructions>
      </div>

      <Thumb>
        <ImageRecipe
          src={image ?? RecipeImgPlaceholder}
          alt="cooked meal"
        ></ImageRecipe>
      </Thumb>
    </Wrapper>
  );
};

export default RecipePreparation;
