

function getWeather () {
    
  
  
  function getCurrentLocation() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            
          });
        });
      } else {
        reject(new Error('GEOLOCATION_NOT_FOUND'))
      }
    });
  }

  let getResource = async (url) => {
    let res = await fetch(url);

    if(!res.ok) {
      throw new Error(`cant fetch ${url}`)
    }

    return await res.json()
  }

  return getCurrentLocation().then(({latitude, longitude, timestamp}) => {
    let _url = `http://api.weatherapi.com/v1/current.json?key=${_apiKey}&q=${latitude},${longitude}&aqi=no`;
    return getResource(_url);
  });
    
}
export {getWeather}