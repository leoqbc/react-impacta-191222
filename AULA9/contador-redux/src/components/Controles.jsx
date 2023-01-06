import { useDispatch } from "react-redux";
import { addContador, removeContador } from "../state/contador/contadorSlice";

export default function Controles() {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(removeContador())}> - </button>
            <button onClick={() => dispatch(addContador())}> + </button>
        </div>
    );
}
