import { useContext } from "react";
import { Familia } from "./App";


export default function Neta() {
    const { pai, filho, neta } = useContext(Familia);

    return (
        <div>
            Sou neta meu nome é: {neta}<br />
            meu vo é: {pai}<br />
            Sou Filha meu pai é: {filho}<br />
        </div>
    )
}