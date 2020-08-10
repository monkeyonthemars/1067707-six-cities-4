import React, {PureComponent, createRef} from 'react';
import leaflet from 'leaflet';
import {propTypes} from '../../types/types.js';

const ZOOM_VALUE = 12;

const dafaultIcon = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});

const activeIcon = leaflet.icon({
  iconUrl: `img/pin-active.svg`,
  iconSize: [30, 30]
});

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = createRef();
  }

  componentDidMount() {
    const {
      cityCoordinates,
      currentOffers,
      activePlaceCard,
      currentOffer
    } = this.props;

    this._activePlaceCard = activePlaceCard;

    this.map = leaflet.map(this._mapRef.current, {
      center: [cityCoordinates.latitude, cityCoordinates.longitude],
      zoom: ZOOM_VALUE,
      zoomControl: false,
      marker: true
    });
    this.map.setView([cityCoordinates.latitude, cityCoordinates.longitude], ZOOM_VALUE);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);

    this.markerLayers = [];
    currentOffers.map((rentalOffer) => (
      this.markerLayers.push(leaflet
          .marker(rentalOffer.coordinates, rentalOffer.id === this.props.activePlaceCard ? {icon: activeIcon} : {icon: dafaultIcon})
          .addTo(this.map))
    ));

    if (currentOffer !== undefined) {
      this.markerLayers.push(leaflet
        .marker(currentOffer.coordinates, {icon: activeIcon})
        .addTo(this.map));
    }
  }

  componentDidUpdate() {
    this.map.setView([this.props.cityCoordinates.latitude, this.props.cityCoordinates.longitude], ZOOM_VALUE);

    this.markerLayers.map((markerLayer) => (
      this.map.removeLayer(markerLayer)
    ));

    this.props.currentOffers.map((rentalOffer) => (
      this.markerLayers.push(leaflet
          .marker(rentalOffer.coordinates, rentalOffer.id === this.props.activePlaceCard ? {icon: activeIcon} : {icon: dafaultIcon})
          .addTo(this.map))
    ));

    if (this.props.currentOffer !== undefined) {
      this.markerLayers.push(leaflet
        .marker(this.props.currentOffer.coordinates, {icon: activeIcon})
        .addTo(this.map));
    }
  }

  render() {
    return <div style={{height: `100%`}} ref={this._mapRef} />;
  }
}

Map.propTypes = {
  cityCoordinates: propTypes.cityCoordinates,
  currentOffers: propTypes.currentOffers,
  activePlaceCard: propTypes.activePlaceCard,
  currentOffer: propTypes.currentOffer
};

export default Map;
