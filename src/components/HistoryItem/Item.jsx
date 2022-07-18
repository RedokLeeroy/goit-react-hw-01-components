import PropTypes from 'prop-types';

export const Item = ({type, amount, currency}) => {
    return  <thead>
    <tr>
      <th>{type}</th>
      <th>{amount}</th>
      <th>{currency}</th>
    </tr>
  </thead>
}


Item.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};