import { useSelector} from 'react-redux';
import { RateTable } from "./RateTable";
import { CurrencyCodePicker } from "./CurrencyCodePicker";
import { AmountField } from "./AmountField";
// import { getExchangeRates } from "../api";
import { 
  getCurrencyCode, 
  getAmount,
  getCurrencyData,
} from '../store/rates';

export function ExchangeRate() {
  // const dispatch = useDispatch();
  // const [currencyData, setCurrencyData<] = useState({ USD: 1.0 });
  const amount = useSelector(getAmount)
  const currencyCode = useSelector(getCurrencyCode)
  const currencyData = useSelector(getCurrencyData)
  

  // fetch the exchange rates the first time...
  // eslint-disable-next-line react-hooks/exhaustive-deps
 /*  useEffect(() => {
    dispatch(changeCurrencyCode(currencyCode))
  }, []); */

  return (
    <>
      <section>
        <h1 className="ExchangeRate-header">
          Exchange Rates{" "}
          <CurrencyCodePicker
            /* onChange={handleCurrencyCode} */
          />
        </h1>
      </section>
      <section>
        <AmountField />
      </section>
      <section>
        <RateTable currencyData={currencyData} amount={amount} />
      </section>
    </>
  );
}
