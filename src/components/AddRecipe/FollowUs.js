import { Link } from 'react-router-dom';
import icon from '../../image/icons/symbol.svg';
import { FollowUsContainer } from './FollowUs.styled';

const FollowUs = () => {
  return (
    <FollowUsContainer>
      <Link to="https://www.facebook.com/" aria-label='facebook'>
        <svg width={26} height={26}>
          <use href={icon + '#icon-fb'}></use>
        </svg>
      </Link>
      <Link to="https://www.youtube.com/">
        <svg width={26} height={26} aria-label='youtube'>
          <use href={icon + '#icon-youtube'}></use>
        </svg>
      </Link>
      <Link to="https://twitter.com/" aria-label='twitter'>
        <svg width={26} height={26}>
          <use href={icon + '#icon-tweeter'}></use>
        </svg>
      </Link>
      <Link to="https://www.instagram.com/" aria-label='instagram'>
        <svg width={26} height={26}>
          <use href={icon + '#icon-insta'}></use>
        </svg>
      </Link>
    </FollowUsContainer>
  );
};

export default FollowUs;
