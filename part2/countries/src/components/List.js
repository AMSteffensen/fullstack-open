import { React } from "react";

const List = ({ countries, input }) => {
  const filteredData = countries.filter((c) => {
    if (input === "") {
      return c;
    } else {
      return c.name.common.toLowerCase().includes(input);
    }
  });
  //console.log(filteredData);

  if (filteredData.length >= 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (filteredData.length === 1) {
    return (
      <>
        <ul>
          {filteredData.map((country, i) => (
            <>
              <ul key={i}>
                <li>Name: {country.name.common}</li>
                <li>Capital: {country.capital[0]}</li>
                <li>Area: {country.area}</li>
              </ul>
              <h2>Languages</h2>
              {Object.values(country.languages).map((value, index) => {
                return (
                  <div key={index}>
                    <p>{value}</p>
                    <hr />
                  </div>
                );
              })}
            </>
          ))}
        </ul>
      </>
    );
  } else {
    return (
      <ul>
        {filteredData.map((country, i) => (
          <li key={i}> {country.name.common}</li>
        ))}
      </ul>
    );
  }
};

export default List;
