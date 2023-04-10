
import {
  ImageBox,
  ImageInput,
  Title,
  Wrap,
  Form,
  InputDescriptionWrap,
  InputDescription,
  SelectDescription,
  TitleIngredients,
  WrapIngredients,
  InputIngredientsWrap,
  MainWrapIngredients,

  TitlePreparation,
  WrapPreparation,
  TextAreaPreparation,
  ButtonAdd,
  WrapButtonAdd,
  Description,
  InputWrap
} from './AddRecipeForm.styled';
import addRecipe from '../../image/addRecipe.png';
import AddRecipeIngredients from './AddRecipeIngredients';


const AddRecipeForm = ({ userIngredients,handleDecrement,handleIncrement,handleUserIngredient,handleUnitValue,handleRemove }) => {

  return (
    <Wrap>
      <Title>Add recipe</Title>
      <Form>
        <Description>
          <ImageBox>
            <label htmlFor="file-input">
              <img src={addRecipe} alt="addRecipe" />
            </label>
            <ImageInput
              id="file-input"
              type="file"
              accept="image/png, image/jpeg"
            />
          </ImageBox>
          <InputWrap>
            <InputDescriptionWrap>
              <InputDescription
                type="text"
                name=""
                id=""
                placeholder="Enter item title"
              />
            </InputDescriptionWrap>
            <InputDescriptionWrap>
              <InputDescription
                type="text"
                name=""
                id=""
                placeholder="Enter about recipe"
              />
            </InputDescriptionWrap>
            <InputDescriptionWrap>
              <InputDescription
                type="text"
                name=""
                id=""
                placeholder="Category"
                disabled
              />
              <SelectDescription name="categories" id="categories">
                <option value="Breakfast">Breakfast</option>
                <option value="Beef">Beef</option>
                <option value="Dessert">Dessert</option>
                <option value="Goat">Goat</option>
                <option value="Lamb">Lamb</option>
                <option value="Miscellaneous">Miscellaneous</option>
              </SelectDescription>
            </InputDescriptionWrap>
            <InputDescriptionWrap>
              <InputDescription
                type="text"
                name=""
                id="cooking-time"
                placeholder="Cooking time"
                disabled
              />
              <SelectDescription name="cooking-time" id="cooking-time">
                <option value="">40 min</option>
                <option value="">30 min</option>
                <option value="">20 min</option>
                <option value="">15 min</option>
                <option value="">10 min</option>
                <option value="">5 min</option>
              </SelectDescription>
            </InputDescriptionWrap>
          </InputWrap>
        </Description>
        <MainWrapIngredients>
          <WrapIngredients>
            <TitleIngredients>Ingredients</TitleIngredients>
          </WrapIngredients>

          <InputIngredientsWrap>
            <AddRecipeIngredients
                                  counter={userIngredients.length}
            userIngredients={userIngredients}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
            handleUserIngredient={handleUserIngredient}
            handleUnitValue={handleUnitValue}
            handleRemove={handleRemove}
            />
          </InputIngredientsWrap>
          {/* <InputIngredientsWrap>
            <div>
              <InputIngredients type="text" name="" id="" placeholder="" />
              <SelectIngredients name="ingredients" id="ingredients">
                <option value="Beef">tbs</option>
                <option value="Breakfast">tsp</option>
                <option value="Dessert">kg</option>
                <option value="Goat">g</option>
              </SelectIngredients>
                          <IoCloseOutline size={18} />

            </div>
          </InputIngredientsWrap> */}

          <WrapPreparation>
            <TitlePreparation>Recipe Preparation</TitlePreparation>
            <TextAreaPreparation
              name=""
              id=""
              // cols="30"
              rows="7"
              placeholder="Enter recipe"
            ></TextAreaPreparation>
          </WrapPreparation>
        </MainWrapIngredients>
        <WrapButtonAdd>
          <ButtonAdd type="submit">Add</ButtonAdd>
        </WrapButtonAdd>
      </Form>
    </Wrap>
  );
};

export default AddRecipeForm;
