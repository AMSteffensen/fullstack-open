import { useState, useEffect } from "react";
import axios from "axios";
import List from "./components/List";
import Search from "./components/Search";
import PersonForm from "./components/PersonForm";

const App = () => {
  const [countires, setcountires] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    console.log("effect");
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      console.log("promise fulfilled");
      setAllCountries(response.data);
    });
  }, []);

  let searchHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div>
      <Search input={inputText} onChange={searchHandler} />
      <List input={inputText} countries={allCountries} />
    </div>
  );
};

export default App;
