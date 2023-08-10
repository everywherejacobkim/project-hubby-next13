'use client'

import Image from "next/image";
import {useState, useEffect} from "react"
import weatherImage from "../../assets/images/weather.png"
interface Location {
  latitude: number;
  longitude: number;
}

interface WeatherData {
  name: string;
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: {
    main: string;
  }[];
}

const CurrentWeather:React.FC = () => {

  const [location, setLocation] = useState<Location | null >(null);
  const [weather, setWeather] = useState<WeatherData |null >(null);
  const [minTemp, setMinTemp] = useState<null>(null)
  

  useEffect(() => {
    function success(position: GeolocationPosition) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setLocation({ latitude, longitude });
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

      // Make API call to OpenWeatherMap
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=bfa03003359013c2106acaf9909a4f70&units=metric`
      )
        .then((response) => response.json())
        .then((data: WeatherData) => {
          setWeather(data);
          console.log("weather data", data);
        })
        .catch((error) => console.log(error));
    }

    function error() {
      console.log("Unable to retrieve your location");
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }, []);

 
 
  return (
    <div>
       {weather !== null ? 
        <div>
         
          <h1 className="font-semibold">{weather.name}</h1>
          <div className="flex mt-24 ">
            <p className="text-3xl">{weather.main.temp}°</p>
            <div className="flex pl-3 pt-3" >
              <p> {weather.weather[0].main}</p>
              <span className="pl-1"> {Math.floor(weather.main.temp_max)}°</span>
              <span>/ {Math.floor(weather.main.temp_min)}°</span> 
            </div>
            <div >
            <Image
              src={weatherImage}
              alt="weather image"
              width={250}
              // height={400}
              className="absolute -top-1 right-0"
            />
            </div>
          </div>   
          
        </div>
      : null} 
    </div>
  );
}

export default CurrentWeather