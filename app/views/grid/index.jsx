//import _ from 'lodash';
import React from 'react';
import classNames from './styles.scss';
import logo from 'app/assets/images/expenses-logo.png';
import { HLayout, HLayoutItem, VLayout, VLayoutItem } from 'app/views/shared/components/grid/flexbox/index.jsx';


class Box extends React.Component {
  render() {
    return (
      <div className={classNames.box}>
        {this.props.children}
      </div>
   );
  }
}

Box.propTypes = {
  children: React.PropTypes.node.isRequired
};

export default class Grid2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <VLayout className={classNames.mainContent}>
        <VLayoutItem className={classNames.header}>
          <HLayout justifyItems="center">
            <HLayoutItem className={classNames.centerContent}>
              <HLayout>
                <HLayoutItem style={{ width: '200px' }}><img src={logo} width='150' /></HLayoutItem>
                <HLayoutItem flexGrow><h1 className={classNames.title}>Total Expenses</h1></HLayoutItem>
              </HLayout>
            </HLayoutItem>
          </HLayout>
        </VLayoutItem>
        <VLayoutItem>
          <HLayout justifyItems="center">
            <HLayoutItem className={classNames.centerContent}>
              <Box>Body</Box>
            </HLayoutItem>
          </HLayout>
        </VLayoutItem>
        <VLayoutItem className={classNames.footer}>
          Footer
        </VLayoutItem>
      </VLayout>
    );
  }
}
