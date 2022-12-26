import { Component } from 'react';

export default class Lista extends Component {
    render() {
        const items = this.props.items;
        return (
            <ul>
                {items.map((value, key) => <li key={key}>{value}</li>)}
            </ul>
        );
    }
}