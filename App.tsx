import React from "react";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import store from "./src/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import Home from "./src/module/Home/Home";

export default function App() {
  const persistedStore = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore} loading={null}>
        <StatusBar
          style="auto"
          animated={true}
          networkActivityIndicatorVisible={true}
        />
        <Home />
      </PersistGate>
    </Provider>
  );
}
