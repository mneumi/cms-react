import React from 'react';
import style from './index.module.scss';

const NoMatch: React.FC = () => {
  return <div className={style.wrapper}>
    404 Not Found
  </div>;
}

export default NoMatch;