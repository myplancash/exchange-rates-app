import { useDispatch, useSelector } from 'react-redux';
import { changeCurrencyCode, getSupportedCurrencies, getCurrencyCode } from '../store/rates';

export function CurrencyCodePicker() {

  const supportedCurrencies = useSelector(getSupportedCurrencies)
  const currencyCode = useSelector(getCurrencyCode)

  const dispatch = useDispatch();

  return (
    <select
      className="currencyCode" 
      value={currencyCode} 
      onChange={(e) => {
        dispatch(changeCurrencyCode(e.target.value))}}
    >
      {supportedCurrencies.map((code) => (
        <option value={code}>
          {code}
        </option>
      ))}
    </select>
  );
}
