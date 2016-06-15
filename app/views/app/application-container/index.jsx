import React, { Component }       from 'react';
import Layout from 'app/views/shared/layout/web/index.jsx';
import Header from 'app/views/shared/layout/web/header/index.jsx';
import Footer from 'app/views/shared/layout/web/footer/index.jsx';
import Content from 'app/views/shared/layout/web/content/index.jsx';

class ApplicationContainer extends Component {
  _getHeader() {
    return (<Header />);
  }
  _getFooter() {
    return (<Footer />);
  }
  _getContent() {
    return (<Content>{this.props.children}</Content>);
  }
  render() {
    return (
      <Layout
        header={this._getHeader()}
        footer={this._getFooter()}
        content={this._getContent()}
      />
    );
  }
}

ApplicationContainer.propTypes = {
  children: React.PropTypes.node.isRequired
};

export default ApplicationContainer;
