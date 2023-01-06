import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CONTADOR_ADD } from '../state/contador/types';

export default function Contador() {
    const valor = useSelector(state => state.contador.valor);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     const timeout = setTimeout(() => dispatch({ type: CONTADOR_ADD}), 1000);
    //     return () => clearInterval(timeout)
    // });

    return (
        <>
            Contador: {valor}
        </>
    );
}