import React from 'react';
import TripForm from './TripForm';
import TripMap from './TripMap';

export default class NewTrip extends React.Component {
  render() {
    return (
      <div>
        <TripForm />
        <TripMap />
      </div>
    )
  }
}
