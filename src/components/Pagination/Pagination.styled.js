import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

//experimental
export const MyPaginate = styled(ReactPaginate).attrs({
  containerClassName: 'pagination',
})`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style-type: none;
  padding: 0 5rem;
  //   li a {
  //     border-radius: 7px;
  //     padding: 0.1rem 1rem;
  //     border: gray 1px solid;
  //     cursor: pointer;
  //   }
  //   li.previous a,
  //   li.next a,
  //   li.break a {
  //     border-color: none;
  //   }
  //   li.active a {
  //     background-color: #0366d6;
  //     border-color: transparent;
  //     color: white;
  //     min-width: 32px;
  //   }
  //   li.disabled a {
  //     color: grey;
  //   }
  //   li.disable,
  //   li.disabled a {
  //     cursor: not-allowed;
  //   }
`;
