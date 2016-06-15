import React from 'react';
import classNames from './styles.scss';

const MoneyResultTextContent = ({ text }) => {
  return (
    <div className={classNames.content}>${text}</div>
  );
};

MoneyResultTextContent.propTypes = {
  text: React.PropTypes.string.isRequired
};

export default MoneyResultTextContent;
