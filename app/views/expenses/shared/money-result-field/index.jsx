import React from 'react';
import classNames from './styles.scss';
import { ControlLabel } from 'react-bootstrap';
import MoneyResultTextContent from 'app/views/expenses/shared/money-result-text-content/index.jsx';

const MoneyResultField = ({ label, text }) => {
  return (
    <div>
      <ControlLabel className={classNames.label}>{label}</ControlLabel>
      <MoneyResultTextContent text={text} />
    </div>
  );
};

MoneyResultField.propTypes = {
  label: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired
};

export default MoneyResultField;
