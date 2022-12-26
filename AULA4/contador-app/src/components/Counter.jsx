import { Component } from 'react';

export default class Counter extends Component {
    // 1x só
    constructor(props) {
        super(props);

        this.formater = new Intl.NumberFormat('pt-BR', { 
            style: 'currency', currency: 'BRL'
        });

        this.state = {
            value: this.props.value
        };
    }

    subtract() {
        this.setState({
            value: this.state.value - 0.10
        });
    }

    add() {
        this.setState({
            value: this.state.value + 0.10
        });
    }

    render() {
        return (
            <>
                <button onClick={() => this.subtract()}>-</button>
                {this.formater.format(this.state.value)}
                <button onClick={() => this.add()}>+</button>
            </>
        );
    }

    // Execuda depois do render
    componentDidMount() {
        console.log('Atualizou');
    }

    componentWillUnmount() {
        console.log('Removido');
    }
}
