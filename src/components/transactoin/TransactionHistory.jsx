import PropTypes from 'prop-types';
import { Head, Item, Tab, String } from './Transaction.styled';

export const TransactionTable = ({ items }) => {
  return (
    <Tab class="transaction-history">
      <thead>
        <tr>
          <Head>TYPE</Head>
          <Head>AMOUNT</Head>
          <Head>CURRENCY</Head>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <String key={item.id}>
            <Item>{item.type}</Item>
            <Item>{item.amount}</Item>
            <Item>{item.currency}</Item>
          </String>
        ))}
      </tbody>
    </Tab>
  );
};

TransactionTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
