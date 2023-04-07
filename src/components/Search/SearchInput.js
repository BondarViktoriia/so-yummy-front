import { useFormik } from 'formik';
import * as Yup from 'yup';
import {SelectComponent} from './Select'

export const SearchInput = ({submitSearch}) => {

  const options = [
    { value: 'recipes', label: 'Title' },
    { value: 'ingredients', label: 'Ingredients' },
  ]

  const formik = useFormik({
    initialValues: {
      query: '',
      options: 'recipes'
    },
    onSubmit: (values) => {submitSearch(values)},
    validationSchema: Yup.object().shape({
        query: Yup.string().required("Please enter query")
    })
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
         id="query"
         name="query"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.query}
       />
       <button type='submit'>Search</button>
       <SelectComponent
       options={options}
       value={formik.values.options}
       onChange={value=>formik.setFieldValue('options', value.value)}/>
    </form>
  )
};
