import { useDispatch } from "react-redux";
import { CONTADOR_ADD, CONTADOR_SUB } from "../state/contador/types";

export default function Controles() {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch({ type: CONTADOR_SUB })}> - </button>
            <button onClick={() => dispatch({ type: CONTADOR_ADD })}> + </button>
        </div>
    );
}