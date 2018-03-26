import * as React from 'react';
import { AuthenticationClient, RegisterViewModel } from '../Client';

type properties = {};

export default class Login extends React.Component<properties, {username: string, password: string}> {
    
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
        client.login(new RegisterViewModel(this.state))
            .then(() => alert('User Logged in'))
            .catch(() => alert('Login failed'));      
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
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
            </div>
        );
    }
}
