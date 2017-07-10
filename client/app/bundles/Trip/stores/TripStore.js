import { observable, action, computed } from 'mobx';
import TripApi from '../services/TripApi';

class TripStore {
  @observable trip = {};
  @observable checkins = [];

  constructor() {
    this.tripApi = new TripApi();
  }

  @action setTrip = (trip) => {
    this.trip = trip;
    this.tripApi.subscribeTrip(trip.viewer_uuid, checkin => {
      this.recordCheckin(checkin)
    });
  }

  @action createTrip = (name) => {
    this.tripApi.createTrip(name).
      then(trip => {
        this.trip = trip;
        this.tripApi.subscribeTrip(trip.viewer_uuid, checkin => {
          this.recordCheckin(checkin)
        });
        this.postCheckin();
      });
  }

  @action recordCheckin = (checkin) => {
    this.checkins.push({
      lat: parseFloat(checkin.lat),
      lon: parseFloat(checkin.lon),
      captured_at: parseInt(checkin.captured_at)
    });
  }

  @action postCheckin = () => {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);

      this.tripApi.postCheckin(
        this.trip.owner_uuid,
        position.coords.latitude,
        position.coords.longitude,
        position.timestamp
      );

      setTimeout(() => {
        this.postCheckin();
      }, 2000);
    });
  }
}

// export instance of store rather than class
// we want single instance of store across app
const store = new TripStore();
export default store;
