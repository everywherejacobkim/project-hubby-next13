"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import clear from "../../../public/assets/icons/day_sunny.png";
import clouds from "../../../public/assets/icons/cloudy.png";
import rain from "../../../public/assets/icons/rain.png";
import dayCloudy from "../../../public/assets/icons/day_cloudy.png";

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
      // console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

      // Make API call to OpenWeatherMap
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=bfa03003359013c2106acaf9909a4f70&units=metric`
      )
        .then((response) => response.json())
        .then((data: WeatherData) => {
          setWeather(data);
          // console.log("weather data", data);
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
    if (weather?.weather[0].main === "Clear" && parseInt(hours) >= 18) {
      return (
        <Image
          src={clear}
          alt="clear night"
          width={30}
          height={30}
          className="object-fit"
        />
      );
    } else if (weather?.weather[0].main === "clear") {
      return (
        <Image
          src={clear}
          alt="clear"
          width={30}
          height={30}
          className="object-fit"
        />
      );
    } else if (weather?.weather[0].main === "Rain") {
      <Image
        src={rain}
        alt="clear"
        width={30}
        height={30}
        className="object-fit"
      />;
    } else if (weather?.weather[0].main === "Clouds") {
      return (
        <Image
          src={clouds}
          alt="clear"
          width={30}
          height={20}
          className="object-fit"
        />
      );
    } else if (weather?.weather[0].main === "Clouds" && parseInt(hours) >= 18) {
      return (
        <Image
          src={clouds}
          alt="clear"
          width={30}
          height={20}
          className="object-fit"
        />
      );
    } else if (weather?.weather[0].main === "Thunderstorm") {
      return (
        <Image
          src={dayCloudy}
          alt="clear"
          width={30}
          height={20}
          className="object-fit"
        />
      );
    }
  }

  return (
    <div className="flex gap-2 w-full justify-between h-fit">
       <div className="h-fit pt-1">{renderWeatherImg()}</div>
     {weather ? (
        <div>
          
          <div className="flex">
            
            <p className="text-xl font-semibold">
              {Math.ceil(weather.main.temp)}°
            </p>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
     
    </div>
  );
};

export default CurrentWeather;
