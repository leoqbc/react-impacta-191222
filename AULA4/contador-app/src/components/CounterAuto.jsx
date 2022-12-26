import { useEffect, useState } from "react";

export default function CounterAuto() {
    const [counter, setCounter] = useState(0);
    const [status, setStatus] = useState(false);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    // setInterval(() => setCounter(counter + 1), 1000);
    // executa anter de cada render
    useEffect(() => {
        if (status === false) {
            return;
        }

        const interval = setTimeout(() => {
            setCounter(counter + 1)
        }, 1000);

        // Executa depois que altera o estado
        return () => clearInterval(interval);
    }, [counter, status]);

    // Primeiro e toda e vez
    useEffect(() => {
        console.log('useEffect');
    });


    // Ação só executa a primeira vez!
    useEffect(() => {
        console.log('Unica execução');
    });

    useEffect(() => {
        console.log("Infinito??");
    });

    return (
        <>
            {counter}
            <br />
            Nome: {nome}
            Email: {email}
            <button onClicl={() => setNome("Renato")}>Buga tudo</button>
            <button onClick={() => setStatus(true)}>Start</button>
            <button onClick={() => setStatus(false)}>Stop</button>
        </>
    );
}