// Correcting the imports and removing duplicate imports
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Combining reducers
const rootReducer = combineReducers({ user: userReducer });

// Persist configuration
const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

// Creating the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configuring the store with the persistedReducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Creating the persistor
export const persistor = persistStore(store);
