import { configureStore } from '@reduxjs/toolkit';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
// import contactListSlice from './contactListSlice';
import filterSlice from './filter';
import { persistedContactListReducer } from './contactListSlice';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    contactList: persistedContactListReducer,
  },

  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
