"use client";
import Image from "next/image";
import { useState, useEffect } from "react";


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
    description: string;
  }[];
}

const CurrentWeather: React.FC = () => {
  const [location, setLocation] = useState<Location | null>(null);
  const [weather, setWeather] = useState<WeatherData | null>(null);


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

  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");

  // console.log(hours)
  function renderWeatherImg() {
    if (
      weather?.weather[0].description === "clear sky" &&
      parseInt(hours) >= 18
    ) {
      return "/../public/assets/icons/clear_night.png";
    } else if (weather?.weather[0].description === "clear sky") {
      return "/../public/assets/icons/clear.png";
    } else if (weather?.weather[0].description === "rain") {
      return "/../public/assets/icons/rainy.png";
    } else if (weather?.weather[0].description === "few clouds") {
      return "/../public/assets/icons/fewClouds.png";
    } else if (
      weather?.weather[0].description === "few clouds" &&
      parseInt(hours) >= 18
    ) {
      return "/../public/assets/icons/fewClouds_night.png";
    } else if (
      weather?.weather[0].description === "broken clouds" &&
      parseInt(hours) >= 18
    ) {
      return "/../public/assets/icons/brokenCloud_night.png";
    } else if (weather?.weather[0].description === "thunderstorm") {
      return "/../public/assets/icons/thunderstorm.png";
    }
  }

  return (
    <div className="flex w-full justify-between h-fit">
      {weather ? (
        <div>
          <h1 className="font-semibold">{weather.name}</h1>
          <div className="flex mt-8">
            <p className="text-3xl font-semibold">
              {Math.ceil(weather.main.temp)}°
            </p>
            <div className="flex pl-3 pt-3">
              <p> {weather.weather[0].main}</p>
              <span className="pl-1">
                {" "}
                {Math.floor(weather.main.temp_max)}°
              </span>
              <span>/ {Math.floor(weather.main.temp_min)}°</span>
            </div>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
      <div className="h-fit">
        <Image
          src={renderWeatherImg()}
          alt="weather image"
          width={150}
          height={150}
          className="object-fit"
        />
      </div>
    </div>
  );
};

export default CurrentWeather;
