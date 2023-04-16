import { useSearchParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getSearchRecipe } from '../services/api/ApiSearchRecipes';
import { SearchInput } from '../components/Search/SearchInput';
import Container from '../components/Container/Container';
import Title from '../components/Title/Title';
import { Loader } from '../components/Loader/Loader.jsx';
import { useSelector } from 'react-redux';
import { selectToken } from '../redux/auth/authSelectors';
import { SearchWrapper, PictureSearch, LookingP } from './SearchPage.styled';
import searchMob1x from '../image/search-page/search-mobile-1x.png';
import searchMob2x from '../image/search-page/search-mobile-2x.png';
import searchTablet1x from '../image/search-page/search-tablet-1x.png';
import searchTablet2x from '../image/search-page/search-tablet-2x.png';
import searchDesktop1x from '../image/search-page/search-dekstop-1x.png';
import searchDesktop2x from '../image/search-page/search-desktop-2x.png';

import PaginationComp from 'components/Pagination/Pagination';

const SearchPage = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const options = searchParams.get('options');
  const page = searchParams.get('page');
  const token = useSelector(selectToken);

  const onSetPage = currentPage => {
    setSearchParams({ options: options, query: query, page: currentPage });
  };

  const submitSearch = queryParams => {
    if (queryParams.options === options && queryParams.query === query) {
      return;
    }
    setSearchParams({
      options: queryParams.options,
      query: queryParams.query,
    });
    setResults([]);
  };

  useEffect(() => {
    if (!query || query.length === 0 || query === '') {
      return;
    }
    if (!token) {
      return console.error('Error of authorization');
    }
    async function fetchData() {
      try {
        setIsLoading(true);
        const result = await getSearchRecipe(query, options, token);
        if (result.length === 0 || !result) {
          toast.warning('Nothing found for your request :(');
          setIsLoading(false);
          return;
        }
        setResults([...result]);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [options, query, token]);

  return (
    <main>
      <Container>
        <Title>Search</Title>
      </Container>
      <SearchWrapper>
        <SearchInput query={query ? query : ''} submitSearch={submitSearch} selectCurrentOtions={options}/>
        {results.length > 0 && (
          <PaginationComp
            recipes={results}
            itemsPerPage={12}
            currentPage={page ? page : 0}
            page="search"
            onSetPage={onSetPage}
          />
        )}
        {isLoading && <Loader />}
        {results.length === 0 && (
          <PictureSearch>
            <source
              media="(min-width: 1440px)"
              srcSet={`${searchDesktop1x}, ${searchDesktop2x} 2x`}
            />
            <source
              media="(min-width: 768px)"
              srcSet={`${searchTablet1x}, ${searchTablet2x} 2x`}
            />
            <img
              src={searchMob1x}
              srcSet={`${searchMob1x}, ${searchMob2x} 2x`}
              alt="Ошибка"
            />
          </PictureSearch>
        )}
        {results.length === 0 && (
          <LookingP>Looking for something else</LookingP>
        )}
      </SearchWrapper>
      <ToastContainer />
    </main>
  );
};

export default SearchPage;
