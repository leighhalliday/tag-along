import { observable, action, computed } from 'mobx';
import TripApi from '../services/TripApi';

class TripStore {
  @observable trip = {};
  @observable checkins = [];

  constructor() {
    this.tripApi = new TripApi();
  }

  @action createTrip = (name) => {
    this.tripApi.createTrip(name).
      then(trip => {
        this.trip = trip;
        this.postCheckin();
      });
  }

  @action postCheckin = () => {
    navigator.geolocation.getCurrentPosition(position => {
      
    });
  }
}

// export instance of store rather than class
// we want single instance of store across app
const store = new TripStore();
export default store;
