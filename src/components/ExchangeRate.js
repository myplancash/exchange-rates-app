import { useState, useEffect } from "react";
import { RateTable } from "./RateTable";
import { CurrencyCodePicker } from "./CurrencyCodePicker";
import { AmountField } from "./AmountField";
import { getExchangeRates } from "../api";

import { useSelector } from 'react-redux';

const supportedCurrencies = ["USD", "EUR", "JPY", "CAD", "GBP", "MXN"];

export function ExchangeRate() {
  const [currencyData, setCurrencyData] = useState({ USD: 1.0 });
  const amount = useSelector(state => state.rates.amount )
  const currencyCode = useSelector(state => state.rates.currencyCode)
  

  // fetch the exchange rates each time currency code changes
  useEffect(() => {
    getExchangeRates(currencyCode, supportedCurrencies).then((rates) => {
      setCurrencyData(rates);
    });
  }, [currencyCode]);

  return (
    <>
      <section>
        <h1 className="ExchangeRate-header">
          Exchange Rates{" "}
          <CurrencyCodePicker
            supportedCurrencies={supportedCurrencies}
            currencyCode={currencyCode}
            /* onChange={handleCurrencyCode} */
          />
        </h1>
      </section>
      <section>
        <AmountField amount={amount} /* onChange={handleAmountChange}  *//>
      </section>
      <section>
        <RateTable currencyData={currencyData} amount={amount} />
      </section>
    </>
  );
}
