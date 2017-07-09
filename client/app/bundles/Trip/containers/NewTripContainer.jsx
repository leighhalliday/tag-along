import React from 'react';
import { Provider } from 'mobx-react';
import TripStore from '../stores/TripStore';
import NewTrip from '../components/NewTrip';

export default (props, _railsContext) => {
  return (
    <Provider TripStore={TripStore}>
      <NewTrip {...props} />
    </Provider>
  );
};
