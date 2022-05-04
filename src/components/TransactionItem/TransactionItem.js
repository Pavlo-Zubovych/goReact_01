import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionItem.module.css';
const TransactionItem = ({ type, amount, currency }) => (
    <tr className={styles.tableItem}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
    </tr>
);

TransactionItem.propTypes = {
    type: PropTypes.string,
    amoumt: PropTypes.string,
    currency: PropTypes.string,
};

export default TransactionItem;
