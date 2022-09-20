import s from './TransactionHistory.module.css';
import { Item } from '../HistoryItem/Item';
import React from 'react';

interface IData{
  id: string,
  type: string,
  amount: string,
  currency: string
}

interface IProp {
  history: IData[]
}

export const TransactionHistory = ({ history }: IProp): JSX.Element => {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.header}>
        <tr>
          <th>type</th>
          <th>amount</th>
          <th>currency</th>
        </tr>
      </thead>
      <tbody>
        {history.map(({ id, type, amount, currency }) => (
          <Item key={id} type={type} amount={amount} currency={currency} />
        ))}
      </tbody>
    </table>
  );
};
