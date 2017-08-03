// @flow
import React, { Component } from 'react';

import Attending from './Attending';
import PlacesToGo from './PlacesToGo';
import PlacesToAvoid from './PlacesToAvoid';

const baseUrl =
  'https://gist.githubusercontent.com/benjambles/ea36b76bc5d8ff09a51def54f6ebd0cb/raw/524e40ec297353b8070ff10ee0d9d847e44210f5';
const usersUrl = `${baseUrl}/users.json`;
const venuesUrl = `${baseUrl}/venues.json`;

class App extends Component {
  state = {
    users: [],
    venues: [],
    attending: []
  };

  render() {
    return (
      <div>
        <Attending />
        <PlacesToGo />
        <PlacesToAvoid />
      </div>
    );
  }
}

export default App;
