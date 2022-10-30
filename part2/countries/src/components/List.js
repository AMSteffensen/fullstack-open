import { React, useState, useEffect } from "react";
import axios from "axios";

const List = ({ countries, input }) => {
  const [clickedCountry, setClickedCountry] = useState("");
  const [countryData, setCountryData] = useState("");
  const [isShown, setIsShown] = useState(false);

  const handleClick = (e) => {
    setClickedCountry(e.target.innerHTML);
    axios
      .get(`https://restcountries.com/v2/name/${e.target.innerHTML}`)
      .then((response) => {
        setCountryData(response.data);
      });
    setIsShown(true);
  };

  const filteredData = countries.filter((c) => {
    if (input === "") {
      return c;
    } else {
      return c.name.common.toLowerCase().includes(input);
    }
  });

  if (filteredData.length >= 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (filteredData.length === 1) {
    return (
      <>
        <p>{countryData.capital}</p>
        <ul>
          {filteredData.map((country, i) => (
            <>
              <ul key={i}>
                <li>Name: {country.name.common}</li>
                <li>Capital: {country.capital[0]}</li>
                <li>Area: {country.area}</li>
              </ul>
              <h2>Languages</h2>
              {Object.values(country.languages).map((lang, index) => {
                return (
                  <div key={index}>
                    <p>{lang}</p>
                  </div>
                );
              })}
              <img
                alt={country.name.common}
                style={{ width: "100px" }}
                src={country.flags.png}
              />
            </>
          ))}
        </ul>
      </>
    );
  } else {
    return (
      <ul>
        {filteredData.map((country, i) => (
          <>
            <li key={i}>
              {" "}
              <button onClick={(e) => handleClick(e)}>
                {country.name.common}
              </button>
            </li>
          </>
        ))}
        {isShown && (
          <div>
            <h2>{clickedCountry}</h2>
          </div>
        )}
        {isShown && <Box data={countryData} />}
      </ul>
    );
  }
};

const Box = ({ data }) => {
  return (
    <>
      {Object.values(data).map((country, index) => {
        console.log(country);
        return (
          <div key={index}>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            <h3>Languages: </h3>
            {Object.values(country.languages).map((lang, index) => {
              return (
                <div key={index}>
                  <ul>
                    <li>{lang.name}</li>
                  </ul>
                </div>
              );
            })}
            <img
              alt={country.name.common}
              style={{ padding: "20px", width: "100px" }}
              src={country.flags.png}
            />
          </div>
        );
      })}
    </>
  );
};

export default List;
