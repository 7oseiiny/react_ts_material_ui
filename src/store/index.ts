import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './counterstore';
import { productsReducer } from './products';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer, // Include products reducer

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
