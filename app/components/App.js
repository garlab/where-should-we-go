import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import fetch from 'isomorphic-fetch';

import Team from './Team';
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
    const { venues, attendees } = this.state;

    const places = venues.map(venue => ({
      name: venue.name,
      cannotDrink: attendees.filter(user =>
        user.drinks.every(drink => !venue.drinks.includes(drink))
      ),
      cannotEat: attendees.filter(user =>
        venue.food.every(meal => user.wont_eat.includes(meal))
      )
    }));

    return (
      <Grid>
        <Row>
          <Col xs={12} sm={6}>
            <Team users={this.state.users} />
          </Col>
          <Col xs={12} sm={6}>
            <Attending
              users={this.state.users}
              attendees={this.state.attendees}
              updateAttendees={this.updateAttendees}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <PlacesToGo
              places={places.filter(
                p => !p.cannotEat.length && !p.cannotDrink.length
              )}
            />
          </Col>
          <Col xs={12} sm={6}>
            <PlacesToAvoid
              places={places.filter(
                p => p.cannotEat.length || p.cannotDrink.length
              )}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
