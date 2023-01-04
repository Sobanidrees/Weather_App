import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import './Main.css';
export default function Mian() {
  const [city, setcity] = useState(null);
  const [value, setValue] = useState("");
  const [search, setSearch] = useState(false);

  const reciveDAta = (data) => {
    setValue(data);
    setSearch((s) => !s);
  };

  useEffect(() => {
    const fetchdata = async (val) => {
      if (value !== "") {
        val = value;
      }

      const fetching = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=9784c73bde0e49c9bbd110143230101&q=${val}&days=7&aqi=yes&alerts=yes`
      );
      const data = await fetching.json();
      setcity(data);
    };

    navigator.geolocation.getCurrentPosition((positon) => {
      let val = `${positon.coords.latitude},${positon.coords.longitude}`;
      fetchdata(val);
    });
  }, [search]);

  return (
    <>  <Header value={reciveDAta} />
    <div className="MC">
    
      {city ? (
        <div className="Cointainer">
          <div className="Condition">{city.current.condition.text}</div>
          <img
            src={city.current.condition.icon}
            alt="Weather"
            className="img"
          />
          <div className="Location">
            Location : {city.location.country} {city.location.name}
          </div>
          <div className="Temperature">Temperature : {city.current.temp_c}</div>
          <div className="Humidity">Humidity : {city.current.humidity}</div>
          <div className="WindSpeed">Wind Speed : {city.current.wind_kph}{" "}kph</div>
          <div className="LastUpdate">Last Update : {city.current.last_updated}</div>
        
        </div>
      ) : null}
    </div>
    </>
  );
}
