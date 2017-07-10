import React from 'react';
import { observer, inject } from 'mobx-react';
import MapGL, {Marker} from 'react-map-gl';

// const token = process.env.MapboxAccessToken; // eslint-disable-line
const token = 'pk.eyJ1IjoibGVpZ2hoYWxsaWRheSIsImEiOiJjajR2bzNhcHkweHdyMzJucnpodm5zc2h5In0.Vj2bGQOYqTTgDInlXD27Xg';

if (!token) {
  throw new Error('Please specify a valid mapbox token');
}

import MARKER_STYLE from '../markerStyle';

@inject('TripStore')
@observer
export default class TripStore extends React.Component {
  constructor() {
    super();

    this.state = {
      viewport: {
        latitude: 43.6493023,
        longitude: -79.4946319,
        zoom: 11,
        bearing: 0,
        pitch: 50,
        width: window.innerWidth,
        height: window.innerHeight
      },
      settings: {
        dragPan: true,
        dragRotate: true,
        scrollZoom: true,
        touchZoomRotate: true,
        doubleClickZoom: true,
        minZoom: 0,
        maxZoom: 20,
        minPitch: 0,
        maxPitch: 85
      }
    };
  }

  renderMarker = (checkin) => {
    return (
      <Marker key={checkin.captured_at} longitude={checkin.lon} latitude={checkin.lat} >
        <div className="station"><span>{checkin.captured_at}</span></div>
      </Marker>
    );
  }

  onViewportChange = (viewport) => {
    this.setState({viewport});
  }

  viewport = () => {
    const {TripStore} = this.props;

    let latitude = 43.6493023;
    let longitude = -79.4946319;

    if (TripStore.checkins.length > 0) {
      const last = TripStore.checkins[TripStore.checkins.length - 1];
      latitude = last.lat;
      longitude = last.lon;
    }

    return {
      ...this.state.viewport,
      latitude,
      longitude
    };
  }

  render() {
    const {TripStore} = this.props;
    const viewport = this.viewport();

    return (
      <MapGL
        {...viewport}
        {...this.state.settings}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={this.onViewportChange}
        mapboxApiAccessToken={token} >
        <style>{MARKER_STYLE}</style>
        { TripStore.checkins.map(this.renderMarker) }
      </MapGL>
    );
  }
}
