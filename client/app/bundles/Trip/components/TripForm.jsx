import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('TripStore')
@observer
export default class TripForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.nameInput.value;
    this.props.TripStore.createTrip(name);
  }

  render() {
    const {TripStore} = this.props;

    if (TripStore.trip.name) {
      const trip_url = `${window.location.protocol}//${window.location.host}/trips/${TripStore.trip.viewer_uuid}`;

      return (
        <section className="trip-form-container">
          <p>
            Tracking <strong>{TripStore.trip.name}</strong>,
            share this link: <a href={trip_url}>{trip_url}</a>
          </p>
        </section>
      )
    }

    return (
      <section className="trip-form-container">
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={input => this.nameInput = input} required/>
          <button type="submit">Start Tracking</button>
        </form>
      </section>
    )
  }
}
