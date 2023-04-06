// import Container from '../components/Container/Container';
import { useLocation, useSearchParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { SearchInput } from '../components/Search/SearchInput';

export const SearchPage = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const page = searchParams.get('page');
  const options = searchParams.get('options');

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: event.target.elements.query.value, page: 1 });
    setResults([]);
    // event.target.reset();
  };

  const incrementPage = () => {
    setSearchParams({ options: options, query: query, page: Number(page) + 1 });
  };

  useEffect(() => {
    if (!query || query.length === 0 || query === '') {
      return;
    }
    async function fetchData() {
      try {
        setIsLoading(true);
        // const result = await FetchMoviesByTitle()
      } catch (error) {
        
      }
    }
  });

  return (
    <main>
      <div>
        <h1>Search</h1>
        <SearchInput />
      </div>
    </main>
  );
};
