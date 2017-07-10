import ActionCable from 'actioncable';

export default class TripApi {
  constructor() {
    this.cable = ActionCable.createConsumer('/cable');
    this.subscription = false;
  }

  createTrip = (name) => {
    return fetch('/trips', {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        trip: {name}
      })
    }).
    then(response => response.json());
  }

  subscribeTrip = (viewer_uuid, callback) => {
    this.subscription = this.cable.subscriptions.create({
      channel: "TripChannel",
      room: viewer_uuid
    }, {
      received: callback
    });
  }

  postCheckin = (owner_uuid, lat, lon, captured_at) => {
    this.subscription.send({
      owner_uuid,
      lat,
      lon,
      captured_at
    });
  }
}
