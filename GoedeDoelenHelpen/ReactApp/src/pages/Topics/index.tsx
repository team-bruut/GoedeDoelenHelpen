import { RouteComponentProps } from 'react-router';
import * as React from 'react';
import { Link, Route } from 'react-router-dom';

const Topic = ({ match }: RouteComponentProps<{topicId: string}>) => (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
  
export default ({ match }: RouteComponentProps<{}>) => (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>
            Rendering with React
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>
            Components
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>
  
      <Route path={`${match.path}/:topicId`} component={Topic}/>
      <Route 
        exact={true}
        path={match.path} 
        render={() => (
        <h3>Please select a topic.</h3>
      )}
      />
    </div>
  );