import PropTypes from 'prop-types';

export default function Transaction({type, amount, currency}) {
    return <tr>
            <td>{type[0].toUpperCase() + type.slice(1)}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
}

Transaction.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
}
