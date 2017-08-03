// @flow
import React, { Component } from 'react';
import { Panel, Button } from 'react-bootstrap';

const Attendees = ({ attendees }) =>
  attendees.length
    ? <ul>
        {attendees.map(name =>
          <li key={name}>
            {name}
          </li>
        )}
      </ul>
    : <p>Nobody's attending yet!</p>;

const AddAttendee = ({ name, onChange, onAdd }) =>
  <form className="form-inline" onSubmit={onAdd}>
    <label className="sr-only" htmlFor="name">
      Name
    </label>
    <input
      type="text"
      className="form-control mb-2 mr-sm-2 mb-sm-0"
      id="name"
      placeholder="Enter name"
      onChange={onChange}
      value={name}
    />{' '}
    <Button bsStyle="primary" type="submit">
      Add
    </Button>
  </form>;

class Attending extends Component {
  state = {
    name: ''
  };

  onNameChange = e => this.setState({ name: e.target.value });

  onAdd = e => {
    e.preventDefault();
    this.props.updateAttendees([...this.props.attendees, this.state.name]);
    this.setState({ name: '' });
  };

  render() {
    return (
      <Panel header="Attending">
        <Attendees attendees={this.props.attendees} />
        <AddAttendee
          name={this.state.name}
          onChange={this.onNameChange}
          onAdd={this.onAdd}
        />
      </Panel>
    );
  }
}

export default Attending;
