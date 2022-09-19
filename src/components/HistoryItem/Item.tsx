import PropTypes from 'prop-types';
import s from './Item.module.css';
import React from 'react';

interface IProp{
  type: string,
  amount: string,
  currency: string
}

export const Item: React.FunctionComponent<IProp> = ({ type, amount, currency }) => {
  return (
    <tr className={s.row}>
      <th>{type}</th>
      <th>{amount}</th>
      <th>{currency}</th>
    </tr>
  );
};

Item.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
