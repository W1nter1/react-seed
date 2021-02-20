import React, { Fragment, useEffect, useState, FC } from 'react';
import './style.scss';

import { getScrollTop } from '@/utils';
const BackTop: FC = () => {
  const [scrollTop, setScrollTop] = useState<number>(0);
  useEffect(() => {
    function handlerScroll() {
      const scrollTop: number = getScrollTop();
      setScrollTop(scrollTop);
    }
    document.addEventListener('scroll', handlerScroll, false);
    return () => {
      document.removeEventListener('scroll', handlerScroll, false);
    };
  });
  const backToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Fragment>
      {scrollTop > 200 ? (
        <div className="back-to-top" onClick={backToTop}></div>
      ) : null}
    </Fragment>
  );
};
export default BackTop;
