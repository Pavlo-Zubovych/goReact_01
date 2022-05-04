import React from 'react';
import TransactionItem from '../TransactionItem/TransactionItem';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
    <table className={styles.transactionHistory}>
        <thead className={styles.tableHeader}>
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
                    currency={item.currency}
                />
            ))}
        </tbody>
    </table>
);

export default TransactionHistory;
