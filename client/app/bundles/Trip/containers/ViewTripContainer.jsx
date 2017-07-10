import React from 'react';
import { Provider } from 'mobx-react';
import TripStore from '../stores/TripStore';
import ViewTrip from '../components/ViewTrip';

export default (props, _railsContext) => {
  TripStore.setTrip(props.trip);

  return (
    <Provider TripStore={TripStore}>
      <ViewTrip {...props} />
    </Provider>
  );
};
