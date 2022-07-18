import PropTypes from 'prop-types';

export const Stats = ({label, percentage}) => {
    return <li class="item">
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </li>
}

Stats.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
};