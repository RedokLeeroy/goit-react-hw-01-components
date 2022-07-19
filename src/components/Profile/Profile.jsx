import PropTypes from 'prop-types';
import s from "./Profile.module.css"
export const Profile = ({data}) => {
    const {username, tag, location, avatar, stats} = data
    const {followers, views, likes} = stats
    return <div className={s.profile}>
  <div className={s.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={s.avatar}
    />
    <p className={s.name}>{username}</p>
    <p className={s.tag}>{tag}</p>
    <p className={s.location}>{location}</p>
  </div>

  <ul className={s.stats}>
    <li className={s.statsItem}>
      <span className={s.label}>Followers</span>
      <span className={s.quantity}>{followers}</span>
    </li>
    <li className={s.statsItem}>
      <span className={s.label}>{views}</span>
      <span className={s.quantity}>2000</span>
    </li>
    <li className={s.statsItem}>
      <span className={s.label}>Likes</span>
      <span className={s.quantity}>{likes}</span>
    </li>
  </ul>
</div>
}

Profile.propTypes = {
   data: PropTypes.shape({
      username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number
  })
})
};