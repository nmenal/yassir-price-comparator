import * as React from 'react';
import {
  GoogleMap,
  useJsApiLoader,
  OverlayView,
  // InfoWindow,
} from '@react-google-maps/api';
import { Grid, Button } from '@mui/material';
import MapPinAlt from '../../assests/images/MapPinAlt.svg';
import Close from '../../assests/images/Close.svg';
import Order from '../../assests/images/Order.svg';

const containerStyle = {
  height: '60vh',
  width: '100%',
};

const center = {
  lat: 36.7538,
  lng: 3.0588,
};
// const arraOfMarkers = [
//   {
//     lat: 36.7538,
//     lng: 3.0588,
//   },
//   {
//     lat: 36.7539,
//     lng: 3.0589,
//   },
// ];

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAxfDunFB6z8fnz2MPjIXy7OZ4wNDqXzEg',
  });

  const [showInfoWindow, setShowInfoWindow] = React.useState(false);

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  const handleMarkerClick = () => {
    // get info of marker using index
    setShowInfoWindow(!showInfoWindow);
    console.log('clicked');
  };

  React.useEffect(() => {
    console.log({ map });
  }, [map]);

  const divStyle = {
    background: `white`,
    padding: 8,
    borderRadius: '8px',
  };

  return isLoaded ? (
    <Grid container justifyContent="center">
      <Grid item xs={8}>
        <GoogleMap
          options={{ disableDefaultUI: true }}
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {/* Child components, such as markers, info windows, etc. */}
          {/* {arraOfMarkers.map((marker, index) => {
            return ( */}
          {showInfoWindow && (
            <OverlayView
              position={center}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            >
              <>
                <div style={divStyle}>
                  <div
                    style={{
                      zIndex: 1,
                      position: 'absolute',
                      width: '1px',
                      height: '1px',
                      top: '1px',
                      right: '22px',
                    }}
                  >
                    <img
                      src={Close}
                      alt={Close}
                      onClick={() => handleMarkerClick()}
                      style={{
                        alignSelf: 'flex-end',
                        cursor: 'pointer',
                      }}
                    />
                  </div>
                  <Grid container spacing={4}>
                    <Grid item xs={1}>
                      <img src={Order} alt={Order} />
                    </Grid>
                    <Grid item xs={7}>
                      <p
                        style={{
                          fontSize: '12px',
                          fontWeight: 'bold',
                          color: 'black',
                          whiteSpace: 'nowrap',
                          margin: '5px',
                          textAlign: 'left',
                        }}
                      >
                        HP laptop 15P 500 HDD
                      </p>
                      <p
                        style={{
                          fontSize: '12px',
                          fontWeight: 'bold',
                          color: 'green',
                          whiteSpace: 'nowrap',
                          margin: '5px',
                          textAlign: 'left',
                        }}
                      >
                        68 000. 00 da
                      </p>
                      <p
                        style={{
                          fontSize: '12px',
                          fontWeight: 'bold',
                          color: 'red',
                          whiteSpace: 'nowrap',
                          margin: '5px',
                          textAlign: 'left',
                        }}
                      >
                        +10 % last month
                      </p>
                    </Grid>
                  </Grid>
                  <Button
                    style={{
                      color: 'white',
                      background: '#ffa908',
                      borderRadius: '4px',
                      border: 'none',
                      boxShadow: 'none',
                      fontWeight: 'bold',
                      marginTop: '10px',
                    }}
                  >
                    Order Express
                  </Button>
                </div>
              </>
            </OverlayView>
          )}
          <OverlayView
            position={center}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <button
              onClick={() => {
                handleMarkerClick();
              }}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <Grid container spacing={4}>
                <Grid item xs={1}>
                  <img src={MapPinAlt} alt={MapPinAlt} />
                </Grid>
                <Grid item xs={7}>
                  <p
                    style={{
                      fontSize: '12px',
                      fontWeight: 'bold',
                      color: '#ffa908',
                      margin: '20px 5px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    68 000. 00 da
                  </p>
                </Grid>
              </Grid>
            </button>
          </OverlayView>
        </GoogleMap>
      </Grid>
    </Grid>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
