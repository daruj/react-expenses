import React, { Component } from 'react';
import ExpensesList from 'app/views/expenses/expenses-container/expenses-list/index.jsx';
import ExpensesNewItem from 'app/views/expenses/expenses-container/expenses-new-item/index.jsx';
import SalaryResultBalance from 'app/views/expenses/expenses-container/salary-result-balance/index.jsx';
import { Col } from 'react-bootstrap';

export default class ExpensesContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Col lg={12}>
        <SalaryResultBalance />
        <ExpensesNewItem />
        <ExpensesList />
      </Col>
    );
  }
}
