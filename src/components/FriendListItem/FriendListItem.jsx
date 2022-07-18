import PropTypes from 'prop-types';

export const FriendsListItem = ({avatar, name, Isonline}) => {
    return <li class="item">
  <span class={Isonline? "online":"offline"}></span>
  <img class="avatar" src={avatar} alt="User avatar" width="48" />
  <p class="name">{name}</p>
</li>
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};