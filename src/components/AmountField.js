import { useDispatch, useSelector } from 'react-redux';
import { changeAmount, getAmount } from '../store/rates';

export function AmountField() {

  const dispatch = useDispatch()
  const amount = useSelector(getAmount)

  const onChange = (e) => {
    let newAmount = e.target.value
    dispatch(changeAmount(newAmount))
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
