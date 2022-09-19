import s from './FriendList.module.css';
import { FriendsListItem } from '../FriendListItem/FriendsListItem';
import React from 'react';

interface IFriend {
  id: string,
  name: string,
  avatar: string,
  isOnline: boolean
}
interface IProp {
  friend: IFriend[];
}

export const FriendsList: React.FunctionComponent<IProp> = ({ friend }) => {
  return (
    <ul className={s.friendList}>
      {friend.map(({ avatar, name, isOnline, id }) => (
        <FriendsListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
        />
      ))}
    </ul>
  );
};

