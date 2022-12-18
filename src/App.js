import './App.css';
import { useState, useEffect } from "react";
import ListControl from './components/ListControl';
import CountryList from './components/CountryList';
import { subscribe, unsubscribe } from "./events";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [countryList, setList] = useState([]);

  useEffect(() => {
    subscribe("showList", () => setIsOpen(true));
    subscribe("hideList", () => setIsOpen(false));

    async function fetchData() {
      const apiUrl = 'https://restcountries.com/v3.1/region/africa';
      const response = await fetch(apiUrl)
      let data = await response.json()
      setList(data)
    }
    fetchData()

    return () => {
      unsubscribe("showList", () => setIsOpen(false));
      unsubscribe("hideList", () => setIsOpen(true));
    }
  }, []);

  return (
    <div className="App">
      <h1>Using Custom Events In React</h1>
      <ListControl listState={isOpen}></ListControl>
      {
        isOpen ? <CountryList listData={countryList}></CountryList> :
          <h3>
            Click on the Button above to render the list of African Countries
          </h3>
      }
    </div>
  );
}

export default App;
