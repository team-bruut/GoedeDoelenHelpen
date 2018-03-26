import * as React from 'react';
import { AuthenticationClient } from '../Client';

export default class Logout extends React.Component<{}, {message: string}> {
    constructor(props: {}) {
        super(props);

        this.state = {
            message: 'Bassy!'
        };

        let client = new AuthenticationClient();
        client.logout()
            .then(() => this.setState({...this.state, message: 'You are logged out'}))
            .catch(() => this.setState({...this.state, message: 'Something went wrong'}));
    }

    render() {
        return <h1>{this.state.message}</h1>;
    }
}