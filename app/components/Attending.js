import React, { Component } from 'react';
import { Button, Glyphicon, Panel } from 'react-bootstrap';

const styles = {
  attendeeRow: { minHeight: 24 }
};

const ButtonRemove = ({ name, onRemove }) =>
  <Button bsSize="xsmall" className="pull-right" onClick={onRemove(name)}>
    <Glyphicon glyph="remove" />
  </Button>;

const Attendees = ({ attendees, onRemove }) =>
  attendees.length
    ? <ul>
        {attendees.map(attendee =>
          <li key={attendee.name} style={styles.attendeeRow}>
            {attendee.name}
            <ButtonRemove name={attendee.name} onRemove={onRemove} />
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

  handleNameChange = e => this.setState({ name: e.target.value });

  handleAdd = e => {
    e.preventDefault();

    const attendee = this.props.users.find(u => u.name === this.state.name);
    if (attendee) {
      if (!this.props.attendees.includes(attendee)) {
        this.props.updateAttendees([...this.props.attendees, attendee]);
      }
      this.setState({ name: '' });
    } else {
      console.error("user doesn't exist");
    }
  };

  handleRemove = name => () =>
    this.props.updateAttendees(
      this.props.attendees.filter(a => a.name !== name)
    );

  render() {
    return (
      <Panel header="Attending">
        <Attendees
          attendees={this.props.attendees}
          onRemove={this.handleRemove}
        />
        <AddAttendee
          name={this.state.name}
          onChange={this.handleNameChange}
          onAdd={this.handleAdd}
        />
      </Panel>
    );
  }
}

export default Attending;
