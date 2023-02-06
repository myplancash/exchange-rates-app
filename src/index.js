import React from "react";
import ReactDOM from "react-dom";
import { ExchangeRate } from "./components/ExchangeRate";
import "./style.css";
import { Provider } from 'react-redux'
import { store } from './store/store';
import { getInitialRatesThunk } from './store/rates'

// inside of the dispatch we need to return a thunk
// kick start Ajax call for  exchange reates  
store.dispatch(getInitialRatesThunk)

ReactDOM.render(
  <Provider store={store}>
    <ExchangeRate />
  </Provider>, document.getElementById("root")
);
