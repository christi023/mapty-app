import { useState, useEffect } from 'react';

const useGeoLocation = () => {
  // holds the geo location state
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: {
      lat: '',
      lng: '',
    },
  });

  // get coordinates from parameter
  const onSuccess = (location) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
    console.log(location);
  };

  // accept error message
  const onError = (error) => {
    setLocation({
      loaded: true,
      error,
    });
  };

  // ask for permission & get user location
  useEffect(() => {
    if (!('geolocation' in navigator)) {
      onError({
        code: 0,
        message: 'GeoLocation is not supported',
      });
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};

export default useGeoLocation;
