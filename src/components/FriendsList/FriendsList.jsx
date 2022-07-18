import { FriendsListItem } from "components/FriendListItem/FriendListItem"
export const FriendsList = ({friend}) => {
    console.log(friend);
    return <ul class="friend-list">
  {friend.map(({avatar, name, isOnline, id}) => <FriendsListItem avatar={avatar} name={name} isOnline={isOnline} key={id}/>)}
</ul>
}