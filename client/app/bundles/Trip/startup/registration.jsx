import ReactOnRails from 'react-on-rails';

import NewTripContainer from '../containers/NewTripContainer';
import ViewTripContainer from '../containers/ViewTripContainer';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  NewTripContainer,
  ViewTripContainer
});
