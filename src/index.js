import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {store} from "./Redux/store";
// import { PersistGate } from "redux-persist/integration/react";

import './index.css';
import App from './component/App/App'


ReactDOM.render(
  <Provider store={store}>
  {/* <PersistGate loading={null} persistor={persistor}> */}
  
    <App />
  
  {/* </PersistGate > */}
  </Provider>,
  document.querySelector("#root")
);
