import User from "../components/data/User";
import Friends from "../components/data/Friends"
import Data from "../components/data/Data"
import Transactions from "../components/data/Transactions"
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { Stat } from "./Stat/Stat";
import { FriendsList } from "./FriendsList/FriendsList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

export const App = () => {
  return <>
  <Profile data={User}></Profile>
  <Statistics title="title">
    <Stat data={Data}></Stat>
  </Statistics>
  <FriendsList friend = {Friends}>
  </FriendsList>
  <TransactionHistory history={Transactions}></TransactionHistory>
         </>
};
