import { configureStore } from '@reduxjs/toolkit';

import contadorReducer from './contador/contadorReducer';
import filterlistReducer from './filterlist/filterlistReducer';

export const store = configureStore({
  reducer: {
    contador: contadorReducer,
    filterlist: filterlistReducer
  }
});