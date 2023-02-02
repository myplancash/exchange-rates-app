const initialState = {
  amount: '19.99',
  currencyCode: 'USD',
}


export function ratesReducer(state = initialState, action) {
  switch(action.type) {
    case 'rates/amountChanged':
     return {
      ...state,
      amount: action.payload
    }
    case 'rates/currencyCodeChanged':
      return {
        ...state,
        currencyCode: action.payload
      }
    default:
       return state
  } 
}
// State Sellectors 
export const getAmount = (state) => state.rates.amount;
export const getCurrencyCode = (state) => state.rates.currencyCode


// ACTION tYPES
export const AMOUNT_CHANGE = 'rates/amountChanged';
export const CURRENCY_CODE_CHANGE = 'rates/currencyCodeChanged';


//ACTION CREATORS
export const changeAmount = (amount) => ({
  type: 'AMOUNT_CHANGE',
  payload: amount
})

export const changeCurrencyCode = (currencyCode) => ({
  type: 'CURRENCY_CODE_CHANGE',
  payload: currencyCode
})