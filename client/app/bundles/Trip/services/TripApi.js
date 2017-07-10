export default class TripApi {
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
}
