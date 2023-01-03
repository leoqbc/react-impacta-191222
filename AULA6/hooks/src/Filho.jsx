import { useContext } from "react";
import Neta from "./Neta";

import { Familia } from "./App";

export default function Filho() {
    const { pai } = useContext(Familia);

    return (
        <div>
            Sou Filho meu pai é: {pai}
            <br />
            Minha filha é: 
            <Neta />
        </div>
    );
}