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
      {items.map(item => (
        <TransactionItem
          key={item.id}
          type={item.type}
          amount={item.amount}
          currency={item.amount}
        />
      ))}
    </tbody>
  </table>
);

export default TransactionHistory;
