import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'components/Container/Container';
import Title from 'components/Title/Title';
import CategoryList from 'components/Categories/CategoryList';
import CategoriesByName from 'components/Categories/CategoriesByName';

import { Loader } from 'components/Loader/Loader';

const CategoriesPage = () => {
  return (
    <Container>
      <Title>Categories</Title>
      <CategoryList />
      <CategoriesByName />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default CategoriesPage;
