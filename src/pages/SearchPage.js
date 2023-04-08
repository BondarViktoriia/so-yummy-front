// import Container from '../components/Container/Container';
import { useSearchParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getSearchRecipe } from '../services/api/ApiSearchRecipes';
import { SearchInput } from '../components/Search/SearchInput';
import { SearchList } from '../components/Search/SearchList';

const SearchPage = () => {
  // const location = useLocation();
  const [results, setResults] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const page = searchParams.get('page');
  const options = searchParams.get('options');

  console.log(IsLoading);
  const submitSearch = ({ query, options }) => {
    setSearchParams({ options: options, query: query, page: 1 });
    setResults([]);
  };

  // const incrementPage = () => {
  //   setSearchParams({ options: options, query: query, page: Number(page) + 1 });
  // };

  useEffect(() => {
    if (!query || query.length === 0 || query === '') {
      return;
    }
    async function fetchData() {
      try {
        setIsLoading(true);
        console.log(query, page, options);
        const result = await getSearchRecipe(query, page, options);
        if (result === 0 || !result) {
          console.log('Nothing found for your request :(');
          return;
        }
        setResults(p => [...result, ...p]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [options, page, query]);

  return (
    <main>
      <div>
        <h1>Search</h1>
        <SearchInput submitSearch={submitSearch} />
        <SearchList results={results} />
      </div>
    </main>
  );
};

export default SearchPage;
