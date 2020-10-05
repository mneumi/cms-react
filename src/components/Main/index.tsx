import React from 'react';
import style from './index.module.scss';

const Main: React.FC = (props) => {
  return (
    <div className={style.wrapper}>
      { props.children }
    </div>
  );
}

export default Main;