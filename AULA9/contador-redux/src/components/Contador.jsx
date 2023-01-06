import { useSelector } from 'react-redux';

export default function Contador() {
    const valor = useSelector(state => state.contador.valor);

    return (
        <>
            Contador: {valor}
        </>
    );
}