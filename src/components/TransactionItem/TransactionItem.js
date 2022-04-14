import React from 'react';
import PropTypes from 'prop-types';

const TransactionItem = ({ type, amount, currency }) => (
  <tr className="tabelItem">
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
