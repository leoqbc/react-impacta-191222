import { Component } from 'react';
import TableBody from './TableBody';
import TableHead from './TableHead';

// module.exports -> NodeJS cuidado!!

// Este é do WebPack
export default class Table extends Component {
    render() {
        return (
            <table border="1">
                <TableHead />

                <TableBody
                    id={33}
                    nome={this.props.nomeCliente}
                    email="ana@gmail.com"

                    rows={[
                        1, 2, 3, 4, 5
                    ]}

                    cliente={{
                        nome: "Leonardo"
                    }}

                    // instancia={new Classe()}

                    string={'texto aqui'}

                    bool={false}

                    className="table-body"

                    onClick={() => alert('chamou click')}
                />
            </table>
        );
    }
}
