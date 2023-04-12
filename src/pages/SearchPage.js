// import Container from '../components/Container/Container';
import { useSearchParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getSearchRecipe } from '../services/api/ApiSearchRecipes';
import { SearchInput } from '../components/Search/SearchInput';
// import { SearchList } from '../components/Search/SearchList';
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
  // const location = useLocation();
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const page = searchParams.get('page');
  const options = searchParams.get('options');
  const token = useSelector(selectToken);
  console.log(token)

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



  // const incrementPage = () => {
  //   setSearchParams({ options: options, query: query, page: Number(page) + 1 });
  // };

  useEffect(() => {
    if (!query || query.length === 0 || query === '') {
      return;
    }
    if (!token){
      return console.error('Error of authorization')
    }
    async function fetchData() {
      try {
        setIsLoading(true);
        const result = await getSearchRecipe(query, options, token);
        if (result === 0 || !result) { 
          console.log('Nothing found for your request :(');
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
        {/* <SearchList results={results} /> */}
        <SearchInput submitSearch={submitSearch} />

        {results.length > 0 && (
          <PaginationComp recipes={results} itemsPerPage={12} page="search" />
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
    </main>
  );
};

export default SearchPage;
