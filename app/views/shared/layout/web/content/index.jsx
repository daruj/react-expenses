import React from 'react';
//import classNames from './styles.scss';
//import { HLayout, HLayoutItem } from 'app/views/shared/components/grid/flexbox/index.jsx';

const Content = ({ children }) => {
  return children;
};

Content.propTypes = {
  children: React.PropTypes.node.isRequired
};

export default Content;
