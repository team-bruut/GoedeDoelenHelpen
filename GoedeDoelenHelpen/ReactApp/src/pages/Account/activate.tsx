import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import * as qs from 'query-string';
import { AuthenticationClient } from '../../Client';

type props = RouteComponentProps<{}>;
type state = {};

export class ActivateComponent extends React.Component<props, state> {
    
    public constructor(p: props) {
        super(p);
        let parameters = qs.parse(p.location.search);

        let client = new AuthenticationClient();
        client.confirmEmail(parameters.userId, parameters.code)
            .then(() => alert('user activated'))
            .catch(() => 'user could not activated');
        
    }

    public render() {
        return <h1>hello</h1>;
    }

}