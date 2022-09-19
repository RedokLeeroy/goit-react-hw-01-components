import React from 'react';
import s from "./FriendsListItem.module.css"

interface IProps {
  avatar: string,
  name: string,
  isOnline: boolean
}

export const FriendsListItem: React.FunctionComponent<IProps> = ({avatar, name, isOnline}) => {
    return <li className={s.item}>
  <span className={isOnline? s.online:s.offline}></span>
  <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={s.name}>{name}</p>
</li>
}