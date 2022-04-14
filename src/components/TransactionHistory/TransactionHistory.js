import React from 'react';
import TransactionItem from '../TransactionItem/TransactionItem';

const TransactionHistory = ({ items }) => (
  <table className="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      <TransactionItem
        type={items.type}
        amount={items.amount}
        currency={items.amount}
      />
    </tbody>
  </table>
);

export default TransactionHistory;
