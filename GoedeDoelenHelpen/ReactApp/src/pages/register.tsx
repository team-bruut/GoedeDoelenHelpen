import * as React from 'react';
import { RegisterViewModel, AuthenticationClient } from '../Client';

export class RegisterComponent extends React.Component<{}, {username: string, password: string}> {

    constructor(props: {}) {
        super(props);

        this.state = {username: '', password: ''};

    }

    handelUsernameChange(event: React.FormEvent<HTMLInputElement>) {
        this.setState({...this.state, username: event.currentTarget.value});
    }

    handelPasswordChange(event: React.FormEvent<HTMLInputElement>) {
        this.setState({...this.state, password: event.currentTarget.value});
    }

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        let client = new AuthenticationClient();
        client.register(new RegisterViewModel(this.state))
            .then(() => alert('user registered'));
        
    }

    render() {
        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <label htmlFor="userName">
                    username:
                    <input 
                        type="text" 
                        value={this.state.username}
                        onChange={e => this.handelUsernameChange(e)} 
                        name="username"
                    />
                </label>
                <label htmlFor="password">
                    password:
                    <input 
                        type="password" 
                        onChange={e => this.handelPasswordChange(e)}
                        name="password"
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}