import { useDispatch } from 'react-redux';
import { changeAmount } from '../store/rates';

export function AmountField({ amount }) {

  const dispatch = useDispatch()

  const onChange = (e) => {
    dispatch(changeAmount(amount))
  }

  return (
    <form className="ExchangeRate-form">
      <input
        aria-label="Amount in base currency"
        type="text"
        value={amount}
        onChange={onChange}
      />
    </form>
  );
}
