import * as React from 'react';
import { Client } from '../Client';

export default class Home extends React.Component<{}, {author: string}> {

    constructor(props: {}) {
        super(props);
        this.state = {author: ''};

        let client = new Client();
        client.apiSampleDataAuthorGet()
            .then((author) => this.setState({...this.state, author: author}))
            .catch(() => this.setState({...this.state, author: 'private'}));
            
    }

    render() {
        return (
            <div>
                <h2>Home to {this.state.author}</h2>
            </div>
        );
    }       
}