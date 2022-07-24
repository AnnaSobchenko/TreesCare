import { combineReducers, configureStore } from "@reduxjs/toolkit";
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
import themeReducer from "./theme/themeSlice";
import langReducer from "./lang/langSlice";
import treesReducer from "./trees/treesSlice";
import adminReducer from "./admin/adminSlice";

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
const treesPersistConfig = {
  key: "trees",
  storage,
  whitelist: ["trees"],
};
const adminPersistConfig = {
  key: "admin",
  storage,
  whitelist: ["treesAdmin", "method"],
};
const authPersistedReducer = persistReducer(authPersistConfig, authReducer);
const usersPersistedReducer = persistReducer(usersPersistConfig, usersReducer);
const treesPersistedReducer = persistReducer(treesPersistConfig, treesReducer);
const adminPersistedReducer = persistReducer(adminPersistConfig, adminReducer);

const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["theme", "lang"],
};

const rootReducer = combineReducers({
  auth: authPersistedReducer,
  users: usersPersistedReducer,
  trees: treesPersistedReducer,
  admin: adminPersistedReducer,
  theme: themeReducer,
  lang: langReducer,
});
const rootPersistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
  reducer: rootPersistedReducer,
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
