import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('TripStore')
@observer
export default class TripStore extends React.Component {
  render() {
    const {TripStore} = this.props;

    return (
      <div>
        {TripStore.checkins.map(checkin => (
          <p key={checkin.captured_at}>
            {checkin.lat}, {checkin.lon}
          </p>
        ))}
      </div>
    )
  }
}
