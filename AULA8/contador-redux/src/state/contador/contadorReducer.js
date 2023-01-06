import { CONTADOR_ADD, CONTADOR_SUB } from "./types";

const INITIAL_STATE = {
    valor: 0
};

export default function contadorReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case CONTADOR_ADD:
            return {...state, valor: state.valor + 1};
        case CONTADOR_SUB:
            return {...state, valor: state.valor - 1};
        default:
            return state;
    }
}