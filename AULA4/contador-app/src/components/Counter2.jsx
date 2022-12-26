// Hooks - 
// useState
// useEffect
// useReducer
// useContext

import { useState } from "react";

// formato 1, componente funcional
export default function Counter2(props) {
    // value variavel de leitura
    // setValue para alterar o estado da value
    const [value, setValue] = useState(props.value);

    const formater = new Intl.NumberFormat('pt-BR', { 
        style: 'currency', currency: 'BRL'
    });

    // function subtract() {
    //     setValue(value - 1);
    // }
    
    // alternativa
    // const add = () => {
    //     setValue(value + 1);
    // }

    return (
        <>
            <button onClick={() => setValue(value - 1)}>-</button>
            {formater.format(value)}
            <button onClick={() => setValue(value + 2)}>+</button>
        </>
    );
}

// formato 2, componete arraw function
// const Counter2 = () => {

// };

// export default Counter2;