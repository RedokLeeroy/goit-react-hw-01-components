export const FriendsListItem = ({avatar, name, Isonline}) => {
    return <li class="item">
  <span class={Isonline? "online":"offline"}></span>
  <img class="avatar" src={avatar} alt="User avatar" width="48" />
  <p class="name">{name}</p>
</li>
}