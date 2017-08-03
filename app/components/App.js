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
    const places = this.state.venues.map(venue => ({
      name: venue.name,
      cannotDrink: this.state.users.filter(user =>
        user.drinks.every(drink => !venue.drinks.includes(drink))
      ),
      cannotEat: this.state.users.filter(user =>
        venue.food.every(meal => user.wont_eat.includes(meal))
      )
    }));

    return (
      <div>
        <Attending
          users={this.state.users}
          attendees={this.state.attendees}
          updateAttendees={this.updateAttendees}
        />
        <PlacesToGo
          places={places.filter(
            p => !p.cannotEat.length && !p.cannotDrink.length
          )}
        />
        <PlacesToAvoid
          places={places.filter(
            p => p.cannotEat.length || p.cannotDrink.length
          )}
        />
      </div>
    );
  }
}

export default App;
