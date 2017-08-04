import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

const PlacesToGo = ({ places }) =>
  <Panel header="Places to go">
    {places.length
      ? <ul>
          {places.map(place =>
            <li key={place.name}>
              {place.name}
            </li>
          )}
        </ul>
      : 'Oops no place to go'}
  </Panel>;

export default PlacesToGo;
