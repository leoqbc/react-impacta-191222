import { configureStore } from '@reduxjs/toolkit';
import { contadorSlice } from './contador/contadorSlice';
import { filterlistSlice } from './filterlist/filterlistSlice';

export const store = configureStore({
  reducer: {
    [contadorSlice.name]: contadorSlice.reducer,
    [filterlistSlice.name]: filterlistSlice.reducer
  }
});
