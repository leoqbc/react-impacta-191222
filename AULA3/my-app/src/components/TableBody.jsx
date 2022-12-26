import { Component } from 'react';

// Acesso a valores externos
// podem ser feito usando as propriedades (props)
export default class TableBody extends Component {
    render() {
        return (
            <tbody onClick={this.props.onClick} className={this.props.className}>
                <tr>
                    <td>{this.props.id}</td>
                    <td>{this.props.nome}</td>
                    <td>{this.props.email}</td>
                </tr>
            </tbody>
        );
    }
}