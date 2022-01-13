import { useState, useEffect } from "react";
import InfoTable from "./components/InfoTable";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import queryCity from "./script/queryCity";

function App() {
  const [data, setData] = useState([])
  const [curSearch, setCurSearch] = useState("SPRINGFIELD")


  useEffect(
    () => {
      (queryCity(curSearch || "SPRINGFIELD", setData))
    },
    [curSearch]
  )

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <NavBar/>
      <SearchBar setCurSearch={setCurSearch}/>
      <InfoTable data={data}/>
    </div>
  );
}

export default App;
