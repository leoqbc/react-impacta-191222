import { useCallback } from "react";
import { useRef } from "react";
import { useReducer } from "react";

const actions = {
    SUBTRACT: 1,
    ADD: 2
};

const initialState = {
    quantity: 1,
    contador: 0
};

function counterReducer(state, { type, payload }) {
    const { contador } = state;
    const counterNumber = Number(payload);
    switch (type) {
        case actions.ADD:
            return { ...state, contador: contador + counterNumber };
        case actions.SUBTRACT:
            return { ...state, contador: contador - counterNumber };
        default:
            return state;
    }
}

// useReducer
// state, initialState, função reducer e por ultimo o dispatch
export default function Contador() {
    const [state, dispatch] = useReducer(counterReducer, initialState);
    const quantityRef = useRef();

    const subtract = () => {
        dispatch({
            type: actions.SUBTRACT,
            payload: quantityRef.current.value
        });
    };

    const add = () => {
        dispatch({
            type: actions.ADD,
            payload: quantityRef.current.value
        });
    };

    return (
        <>
            <input type="number" ref={quantityRef} />
            <button onClick={subtract}> - </button>
            {state.contador}
            <button onClick={add}> + </button>
        </>
    );
}