import React, { useState } from 'react';

import { useMedia } from 'hooks/useMedia';

import RecipesList from 'components/RecipeList/RecipesList';
import Favorite from 'components/Favorites';

import { SearchList } from 'components/Search/SearchList';
import { MyPaginate } from './Pagination.styled';

const PaginationComp = ({ recipes, itemsPerPage, page, onDelete }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = recipes.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(recipes.length / itemsPerPage);

  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % recipes.length;
    setItemOffset(newOffset);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const media = useMedia();

  const rangeDisplay = () => {
    if (media.isMobileScreen) {
      return 3;
    }

    if (media.isTabletScreen) {
      return 5;
    }

    if (media.isDesktopScreen) {
      return 5;
    }
  };

  return (
    <>
      {page === 'favorite' && (
        <Favorite recipes={currentItems} page="favorite" />
      )}

      {page === 'my' && (
        <RecipesList recipes={currentItems} page="my" onDelete={onDelete} />
      )}

      {page === 'search' && <SearchList results={currentItems} />}

      <MyPaginate
        onPageChange={handlePageClick}
        pageRangeDisplayed={rangeDisplay()}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        previousLabel="<"
        nextLabel=">"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item previous"
        previousLinkClassName="page-link previous"
        nextClassName="page-item next"
        nextLinkClassName="page-link next"
        breakLabel=""
        breakClassName="page-item"
        breakLinkClassName="page-link"
        marginPagesDisplayed={0}
        containerClassName="pagination"
        activeClassName="active"
      />
    </>
  );
};

export default PaginationComp;
