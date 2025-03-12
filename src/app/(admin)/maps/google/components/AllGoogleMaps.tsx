import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapStyles = {
  height: '400px',
  width: '100%',
};

const defaultCenter = {
  lat: -34.397,
  lng: 150.644,
};

const AllGoogleMaps = () => (
  <LoadScript googleMapsApiKey="AIzaSyDsucrEdmswqYrw0f6ej3bf4M4suDeRgNA">
    <GoogleMap mapContainerStyle={mapStyles} zoom={8} center={defaultCenter}>
      <Marker position={defaultCenter} />
    </GoogleMap>
  </LoadScript>
);

export default AllGoogleMaps;