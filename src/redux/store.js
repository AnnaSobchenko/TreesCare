import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/authSlice";
import usersReducer from "./user/userSlice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const usersPersistConfig = {
  key: "users",
  storage,
  whitelist: ["users"],
};

const authPersistedReducer = persistReducer(authPersistConfig, authReducer);
const usersPersistedReducer = persistReducer(usersPersistConfig, usersReducer);

const store = configureStore({
  reducer: {
    auth: authPersistedReducer,
    users: usersPersistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);

export default store;
