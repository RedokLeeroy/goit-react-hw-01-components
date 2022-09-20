import React from 'react';
import User from "../data/User.json"
import Friends from '../data/Friends.json';
import Data from '../data/Data.json';
import Transactions from '../data/Transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { Stat } from './Stat/Stat';
import { FriendsList } from './FriendsList/FriendsList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = (): JSX.Element=> {
  return (
    <>
      <Profile data={User}></Profile>
      <Statistics title="upload stats">
        <Stat data={Data}></Stat>
      </Statistics>
      <FriendsList friend={Friends}></FriendsList>
      <TransactionHistory history={Transactions}></TransactionHistory>
    </>
  );
};
