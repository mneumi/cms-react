import React, { useEffect, useState } from 'react';
import style from './index.module.scss';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';

import { IMenuItem } from '../../types';
import { MenuList } from '../../assets/api';

const renderMenu = (menuList: Array<IMenuItem>) => {
  return menuList.map(item => {
    if (item.children) {
      return (
        <Menu.SubMenu title={item.title} key={item.key}>
          { renderMenu(item.children) }
        </Menu.SubMenu>
      );
    }
    return <Menu.Item title={item.title} key={item.key}>
      <NavLink to={item.key}>{item.title}</NavLink>
    </Menu.Item>
  });
}

const Nav: React.FC = () => {

  const [menuList, setMenuList] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const arr = renderMenu(MenuList);
    setMenuList(arr);
  }, []);

  return (
    <div className={style.container}>
      <div className={style.logoWrapper}>
        <img src="/assets/logo.svg" alt='logo' />
        <span>React CMS</span>
      </div>
      <div className={style.menuWrapper}>
        <Menu mode="vertical" theme="dark">
          { menuList }
        </Menu>
      </div>
    </div>
  );
}

export default Nav;