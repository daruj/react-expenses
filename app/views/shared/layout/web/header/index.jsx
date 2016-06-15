import React from 'react';
import logo from 'app/assets/images/expenses-logo.png';
import classNames from './styles.scss';
import { HLayout, HLayoutItem } from 'app/views/shared/components/grid/flexbox/index.jsx';

const Header = () => {
  return (
    <HLayout>
      <HLayoutItem className={classNames.logoContainer}>
        <img src={logo}  className={classNames.logo} />
      </HLayoutItem>
      <HLayoutItem flexGrow><h1 className={classNames.title}>Total Expenses</h1></HLayoutItem>
    </HLayout>
  );
};

export default Header;
