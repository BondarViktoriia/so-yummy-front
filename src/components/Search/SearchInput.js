import { useFormik } from 'formik';
import * as Yup from 'yup';
import { SelectComponent } from './Select';
import {
  Input,
  Button,
  InputWrapper,
  Form,
  InputWrapperBlock,
} from './SearchInput.styled';

export const SearchInput = ({ submitSearch, query, selectCurrentOtions }) => {
  const options = [
    { value: 'recipes', label: 'Title' },
    { value: 'ingredients', label: 'Ingredients' },
  ];
  let initialSelectValue = 'recipes'
if (selectCurrentOtions) {
  initialSelectValue = selectCurrentOtions
}
  const formik = useFormik({
    initialValues: {
      query: query,
      options: initialSelectValue,
    },
    onSubmit: values => {
      submitSearch(values);
    },
    validationSchema: Yup.object().shape({
      query: Yup.string().required('Please enter query'),
    }),
  });
  return (
    <Form onSubmit={formik.handleSubmit} position="relative">
      <InputWrapperBlock>
        <InputWrapper>
          <label htmlFor='query'  aria-label='search'>
                <Input
            id="query"
            name="query"
            type="text"
            onChange={formik.handleChange}
              value={formik.values.query}
               aria-label='search'
          />
      </label>
          <Button type="submit">Search</Button>
        </InputWrapper>
      </InputWrapperBlock>
      <SelectComponent
        options={options}
        value={formik.values.options}
        onChange={value => formik.setFieldValue('options', value.value)}
        selectCurrentOtions = {selectCurrentOtions}
      />
    </Form>
  );
};
