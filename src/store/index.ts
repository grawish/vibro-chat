// setup redux toolkit here
import {
  combineReducers,
  configureStore,
  EmptyObject,
  Middleware,
  Reducer,
} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import globalDataSlice from "./slices/globalDataSlice";
import { persistReducer } from "redux-persist";

const reducer: Reducer<any, any> = combineReducers({
  globalData: globalDataSlice,
});

const persistConfig = {
  key: "root",
  whitelist: ["globalData"],
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const logger: Middleware = (store) => (next) => (action) => {
  console.info("dispatching", action);
  const result = next(action);
  console.info("next state", store.getState());
  return result;
};

const middleware: Middleware[] = [logger];

const store = configureStore({
  reducer: persistedReducer,
  middleware: (
    getDefaultMiddleware: CurriedGetDefaultMiddleware<EmptyObject>
  ) => getDefaultMiddleware().concat(middleware),
});

export default store;

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
