import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

const Team = ({ users }) =>
  <Panel header="Team">
    {users.length
      ? <ul>
          {users.map(user =>
            <li key={user.name}>
              {user.name}
            </li>
          )}
        </ul>
      : 'The team is empty'}
  </Panel>;

export default Team;
