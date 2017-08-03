// @flow
import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

import Attending from './Attending';
import PlacesToGo from './PlacesToGo';
import PlacesToAvoid from './PlacesToAvoid';

const baseUrl = '/json';

class App extends Component {
  state = {
    users: [],
    venues: [],
    attending: []
  };

  componentDidMount() {
    fetch(`${baseUrl}/users.json`)
      .then(res => res.json())
      .then(users => this.setState({ users }));
    fetch(`${baseUrl}/venues.json`)
      .then(res => res.json())
      .then(venues => this.setState({ venues }));
  }

  render() {
    return (
      <div>
        <Attending users={this.state.users} attending={this.state.attending} />
        <PlacesToGo
          venues={this.state.venues}
          attending={this.state.attending}
        />
        <PlacesToAvoid
          venues={this.state.venues}
          attending={this.state.attending}
        />
      </div>
    );
  }
}

export default App;
