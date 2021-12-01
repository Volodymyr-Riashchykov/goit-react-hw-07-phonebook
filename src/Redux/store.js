
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import phonebookReducer from "./phonebook/phonebook-reducer";
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

const persistConfig = {
    key: "contacts",
    storage,
    blacklist: ["filter"],
}

const middleware = [...getDefaultMiddleware({
    serializableCheck: {
        ignoredActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
    }
}), logger]

const store = configureStore({
  reducer: {
    phonebook: persistReducer(persistConfig, phonebookReducer),
},
    middleware,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

export { store,persistor };