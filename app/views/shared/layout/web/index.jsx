import React from 'react';
import classNames from './styles.scss';
import { VLayout, VLayoutItem, HLayout, HLayoutItem } from 'app/views/shared/components/grid/flexbox/index.jsx';

const Layout = ({ content, header, footer }) => {
  return (
    <VLayout className={classNames.mainContent}>
      <VLayoutItem className={classNames.header}>
        <HLayout justifyItems="center">
          <HLayoutItem className={classNames.centerContent}>{header}</HLayoutItem>
        </HLayout>
      </VLayoutItem>
      <VLayoutItem>
        <HLayout justifyItems="center">
          <HLayoutItem className={classNames.centerContent}>{content}</HLayoutItem>
        </HLayout>
      </VLayoutItem>
      <VLayoutItem className={classNames.footer}>
        <HLayout justifyItems="center">
          <HLayoutItem className={classNames.centerContent}>{footer}</HLayoutItem>
        </HLayout>
      </VLayoutItem>
    </VLayout>
  );
};

Layout.propTypes = {
  header: React.PropTypes.node.isRequired,
  footer: React.PropTypes.node.isRequired,
  content: React.PropTypes.node.isRequired
};

export default Layout;
