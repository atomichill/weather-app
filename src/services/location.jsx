function location () {
    let latitude = '';
    let longitude = '';

    function getCurrentLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
          });
        } else {
          throw new Error('GEOLOCATION_NOT_FOUND')
        }
    }



    getCurrentLocation();
    return latitude , longitude;
}

export {location}