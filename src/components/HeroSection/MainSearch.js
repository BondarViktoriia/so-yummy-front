import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Form, Input, HeroButtont } from './HeroSection.styled';

export const MainSearch = () => {
  const navigate = useNavigate();
  const submitSearchRedirect = ({ query }) => {
    navigate(`/search?options=recipes&query=${query}`);
  };

  const formik = useFormik({
    initialValues: {
      query: '',
    },
    onSubmit: values => {
      submitSearchRedirect(values);
    },

    validationSchema: Yup.object().shape({
      query: Yup.string().required('Please enter query'),
    }),
  });

  return (
    <Form onSubmit={formik.handleSubmit} position="relative">
      <label htmlFor='query'   aria-label='search'>
            <Input
        id="query"
        name="query"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.query}
      />
</label>
      <HeroButtont type="submit">Search</HeroButtont>
    </Form>
  );
};
