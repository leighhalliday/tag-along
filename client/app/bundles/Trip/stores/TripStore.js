import { observable, action, computed } from 'mobx';

class TripStore {
  @observable trip = {};
  @observable checkins = [];
}

// export instance of store rather than class
// we want single instance of store across app
const store = new TripStore();
export default store;
