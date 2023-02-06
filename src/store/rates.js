import { getExchangeRates } from '../api';

const initialState = {
  amount: '19.99',
  currencyCode: 'JPY',
  currencyData: [{ 
    code: "USD",
    rate: 1.0, 
  }],
  supportedCurrencies: ["USD", "EUR", "JPY", "CAD", "GBP", "MXN"],
}

export function ratesReducer(state = initialState, action) {
  switch(action.type) {
    case AMOUNT_CHANGE:
     return {
      ...state,
      amount: action.payload
    }
    case CURRENCY_CODE_CHANGE:
      return {
        ...state,
        currencyCode: action.payload
      }
    case RATES_RECEIVED: {
      const codes = Object.keys(action.payload).concat(state.currencyCode)
      const currencyData = [];
      for(let code in action.payload) {
        currencyData.push({ code, rate: action.payload[code] })
      }
      return {
        ...state,
        currencyData,
        supportedCurrencies: codes,
      }
    }
    default:
       return state
  } 
}
// State Selectors 
export const getAmount = (state) => state.rates.amount;
export const getCurrencyCode = (state) => state.rates.currencyCode
export const getCurrencyData = (state) => state.rates.currencyData
export const getSupportedCurrencies = (state) => state.rates.supportedCurrencies
 
// ACTION tYPES
export const AMOUNT_CHANGE = 'rates/amountChanged';
export const CURRENCY_CODE_CHANGE = 'rates/currencyCodeChanged';
export const RATES_RECEIVED = 'rates/ratesReceived'; 

//ACTION CREATORS
export const changeAmount = (amount) => ({
  type: AMOUNT_CHANGE,
  payload: amount
})

export function changeCurrencyCode(currencyCode = initialState.currencyCode){
  return function changeCurrencyCodeThunk(dispatch, getState) {
    const state = getState()
    const supportedCurrencies = getSupportedCurrencies(state)
    dispatch({
      type: CURRENCY_CODE_CHANGE,
      payload: currencyCode
    })
    getExchangeRates(currencyCode, supportedCurrencies).then((rates) => {
      dispatch({
        type: RATES_RECEIVED,
        payload: rates
      })
    })
  } 
}

// thunks
export function getInitialRatesThunk(dispatch, getState) {
  const state = getState();
  const currencyCode = getCurrencyCode(state)
  dispatch(changeCurrencyCode(currencyCode))
}

/* 
export const changeCurrencyCode = (currencyCode) => (dispatch) => {
  dispatch({
    type: 'CURRENCY_CODE_CHANGE',
    payload: currencyCode
  })
}  */