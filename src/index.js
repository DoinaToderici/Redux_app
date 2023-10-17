import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";

//REDUX
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

//TAILWIND
import { ThemeProvider } from "@material-tailwind/react";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
