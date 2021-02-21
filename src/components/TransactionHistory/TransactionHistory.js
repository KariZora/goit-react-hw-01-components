import PropTypes from 'prop-types';
import Transaction from './Transaction';
import s from './Transaction.module.css';

export default function TransactionHistory({items}) {
    return <table className={s['transaction-history']}>
    <thead>
      <tr>
        <th>TYPE</th>
        <th>AMOUNT</th>
        <th>CURRENCY</th>
      </tr>
    </thead>
    <tbody>
        {items.map(item =>
            <Transaction
                key = {item.id}
                type = {item.type}
                amount = {item.amount}
                currency = {item.currency}
            />
        )}
    </tbody>
  </table>
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }),),
}