import "../styles/globals.css";
import store from "../app/store";
import { Provider } from "react-redux";
import { useEffect } from "react";

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {}, []);
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default MyApp;
