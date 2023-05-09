

async function getWeather(city) {

  function getCurrentLocation() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            resolve({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          function (error) {
            reject(error);
          }
        );
      } else {
        reject(new Error("GEOLOCATION_NOT_FOUND"));
      }
    });
  }



  let getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`cant fetch ${url}`);
    }

    return await res.json();
  };
  


  try {
    
    const { latitude, longitude } = await getCurrentLocation();
    const _apiKey = '2930766239d448b9b6a152353230905'
    let _url = ``
    let _forcast = ``
    if(city) {
      _url = `http://api.weatherapi.com/v1/current.json?key=${_apiKey}&q=${city}&aqi=no`;
      _forcast = `http://api.weatherapi.com/v1/forecast.json?key=${_apiKey}&q=${city}&aqi=no&days=7`;
    } else {
      _url = `http://api.weatherapi.com/v1/current.json?key=${_apiKey}&q=${latitude},${longitude}&aqi=no`;
      _forcast = `http://api.weatherapi.com/v1/forecast.json?key=${_apiKey}&q=${latitude},${longitude}&aqi=no&days=7`;
    }
    

    const [dayWeather, forecast , location] = await Promise.all([
      getResource(_url),
      getResource(_forcast),
      getResource(_url),
    ]);

    return { current: dayWeather.current, forecast: forecast.forecast ,location: location.location};
  } catch (error) {
    console.error(error);
  }
}

export { getWeather };