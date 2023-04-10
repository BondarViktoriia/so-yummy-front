import Container from 'components/Container/Container';
import CategoryList from 'components/Categories/CategoryList';
import Title from 'components/Title/Title';
import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

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
