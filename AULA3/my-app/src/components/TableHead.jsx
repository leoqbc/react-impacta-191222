import { Component } from 'react';

export default class TableHead extends Component {
    render() {
        return (
            <thead>
                <tr>
                    <td>#id</td>
                    <td>nome</td>
                    <td>email</td>
                </tr>
            </thead>
        );
    }
}