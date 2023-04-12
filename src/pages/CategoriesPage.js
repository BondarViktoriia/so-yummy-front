import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'components/Container/Container';
import Title from 'components/Title/Title';
import CategoryList from 'components/Categories/CategoryList';
import { Loader } from 'components/Loader/Loader';

const CategoriesPage = () => {
  return (
    <Container>
      <Title>Category</Title>
      <CategoryList />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default CategoriesPage;
