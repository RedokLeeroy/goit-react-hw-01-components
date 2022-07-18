import PropTypes from 'prop-types';

import { FriendsListItem } from "components/FriendListItem/FriendListItem"
export const FriendsList = ({friend}) => {
    return <ul class="friend-list">
  {friend.map(({avatar, name, isOnline, id}) => <FriendsListItem avatar={avatar} name={name} isOnline={isOnline} key={id}/>)}
</ul>
}

FriendsList.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};