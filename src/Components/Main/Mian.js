import React, { useState, useEffect } from "react";
import Header from "../Header/Header";

export default function Mian() {
  const [city, setcity] = useState();
  const [value, setValue] = useState();
  const reciveDAta = (data) => {
    setValue(data);
  
  };
  console.log(value);
  useEffect(() => {
    const fetchdata = async () => {
      const fetching = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=9784c73bde0e49c9bbd110143230101&q=${value}&days=1&aqi=no&alerts=no`
      );
      const data = await fetching.json();
      setcity(data);
    };
    fetchdata();
  }, []);
  return (
    <div>
      <Header value={reciveDAta} />
      <div>{console.log(city)}</div>
    </div>
  );
}
