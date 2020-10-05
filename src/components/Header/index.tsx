import React, { useEffect, useState } from 'react';
import style from './index.module.scss';

import { formatTime } from '../../util';

import { Button } from 'antd';

const Header: React.FC = () => {
  // eslint-disable-next-line
  let [username, setUsername] = useState<string>('某某用户');
  let [currentTime, setCurrentTime] = useState<string>(formatTime(Date.now()));

  useEffect(() => {
    let timer = setInterval(() => {
      setCurrentTime(formatTime(Date.now()));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <React.Fragment>
      <div className={style.top}>
        <div>{`欢迎，${username}`}</div>
        <Button type="primary" size="small">退出</Button>
      </div>
      <div className={style.bottom}>
        <div>首页</div>
        <div>{ currentTime }</div>
      </div>
    </React.Fragment>
  );
}

export default Header;