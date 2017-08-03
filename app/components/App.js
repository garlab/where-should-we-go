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
    attendees: []
  };

  componentDidMount() {
    fetch(`${baseUrl}/users.json`)
      .then(res => res.json())
      .then(users => this.setState({ users }));
    fetch(`${baseUrl}/venues.json`)
      .then(res => res.json())
      .then(venues => this.setState({ venues }));
  }

  updateAttendees = attendees => this.setState({ attendees });

  render() {
    return (
      <div>
        <Attending
          users={this.state.users}
          attendees={this.state.attendees}
          updateAttendees={this.updateAttendees}
        />
        <PlacesToGo
          venues={this.state.venues}
          attendees={this.state.attendees}
        />
        <PlacesToAvoid
          venues={this.state.venues}
          attendees={this.state.attendees}
        />
      </div>
    );
  }
}

export default App;
