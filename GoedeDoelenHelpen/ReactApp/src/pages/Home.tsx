import * as React from 'react';
import { SampleDataClient } from '../Client';

export default class Home extends React.Component<{}, {author: string}> {

    constructor(props: {}) {
        super(props);
        this.state = {author: ''};

        let client = new SampleDataClient();
        client.author()
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