// import { React } from "react";

// const List = ({ countries, input }) => {
//   console.log(countries);
//   // const filteredData = countries.filter((p) => {
//   //     if (countries)
//   // })

//   return (
//     <ul>
//       {countries.map((country, i) => (
//         <>
//           <li key={i}> {country.name.common}</li>
//         </>
//       ))}
//     </ul>
//   );
// };

// export default List;

import { React } from "react";

const List = ({ countries, input }) => {
  const filteredData = countries.filter((c) => {
    if (input === "") {
      return c;
    } else {
      return c.name.common.toLowerCase().includes(input);
    }
  });
  return (
    <ul>
      {filteredData.map((country, i) => (
        <li key={i}> {country.name.common}</li>
      ))}
    </ul>
  );
};

export default List;
