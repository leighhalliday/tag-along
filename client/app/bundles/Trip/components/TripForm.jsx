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
    return (
      <section className="trip-form-container">
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={input => this.nameInput = input}/>
          <button type="submit">Start Tracking</button>
        </form>
      </section>
    )
  }
}
