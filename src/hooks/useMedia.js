import {
  TAB_SCREEN,
  DESK_SCREEN,
  RESOLUTION_LIST,
} from '../constants/breakpointConsts';

import { useEffect, useState } from 'react';

export const useMedia = () => {
  const [screenType, setScreenType] = useState('');

  const [isMobileScreen, setIsMobileScreen] = useState(
    window.innerWidth < TAB_SCREEN
  );

  const [isTabletScreen, setIsTabletScreen] = useState(
    window.innerWidth >= TAB_SCREEN && window.innerWidth < DESK_SCREEN
  );

  const [isDesktopScreen, setIsDesktopScreen] = useState(
    window.innerWidth >= DESK_SCREEN
  );

  const setMatches = (type, size, e = { matches: false }) => {
    if (e.matches) {
      setScreenType(type);
      setIsMobileScreen(size < TAB_SCREEN);
      setIsTabletScreen(size >= TAB_SCREEN && size < DESK_SCREEN);
      setIsDesktopScreen(size > DESK_SCREEN);
    }
  };
  useEffect(() => {
    const handler = [];
    RESOLUTION_LIST.forEach(({ type, size }, index) => {
      let rule = `(min-width: ${size}px)`;

      if (RESOLUTION_LIST[index + 1]?.size) {
        const nextSize = RESOLUTION_LIST[index + 1].size - 1;
        rule += `and (max-width: ${nextSize}px)`;
      }

      const MQ = window.matchMedia(rule);
      setMatches(type, size, MQ);
      const listener = e => setMatches(type, size, e);

      MQ.addEventListener('change', listener);
      handler.push({ elem: MQ, listener });
    });
    return () => {
      handler.forEach(({ elem, listener }) => {
        elem.removeEventListener('change', listener);
      });
    };
  }, []);
  return { screenType, isMobileScreen, isTabletScreen, isDesktopScreen };
};
