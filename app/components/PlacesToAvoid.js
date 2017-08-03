// @flow
import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

const CannotAttend = ({ users, reason }) =>
  !!users.length &&
  <ul>
    {users.map(user => <li key={user.name}>{`${user.name} ${reason}`}</li>)}
  </ul>;

const PlacesToAvoid = ({ places }) =>
  <Panel header="Places to avoid">
    {places.length
      ? <ul>
          {places.map(place =>
            <li key={place.name}>
              {place.name}
              <CannotAttend users={place.cannotDrink} reason="cannot drink" />
              <CannotAttend users={place.cannotEat} reason="cannot eat" />
            </li>
          )}
        </ul>
      : 'None'};
  </Panel>;

export default PlacesToAvoid;
