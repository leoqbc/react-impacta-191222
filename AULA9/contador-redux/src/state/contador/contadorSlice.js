import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    valor: 0
};

export const contadorSlice = createSlice({
    name: 'contador',
    initialState,
    reducers: {
        addContador(state) {
            state.valor++;
        },
        removeContador(state) {
            state.valor--;
        }
    }
});

export const { addContador, removeContador } = contadorSlice.actions;
