
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
// import logger from "redux-logger";
// import phonebookReducer from "./phonebook/phonebook-reducer";
// import {
//     // persistStore,
//     // persistReducer,
//     // FLUSH,
//     // REHYDRATE,
//     // PAUSE,
//     // PERSIST,
//     // PURGE,
//     // REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import { phonebookApi } from "./phonebook/phonebook-slice";

// const persistConfig = {
//     key: "contacts",
//     storage,
//     blacklist: ["filter"],
// }

// const middleware = [...getDefaultMiddleware({
//     serializableCheck: {
//         ignoredActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
//     }
// }), logger]

export const store = configureStore({
  reducer: {
    // phonebook: persistReducer(persistConfig, phonebookReducer),
      [phonebookApi.reducerPath]: phonebookApi.reducer,
},
    middleware: getDefaultMiddleware => [...getDefaultMiddleware(),phonebookApi.middleware,],
//   devTools: process.env.NODE_ENV === "development",
});

// const persistor = persistStore(store);

// export { store,persistor };
setupListeners(store.dispatch);