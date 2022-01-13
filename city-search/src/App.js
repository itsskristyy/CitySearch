import { useState } from "react";
import InfoTable from "./components/InfoTable";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";

const sampleData = ["05343","11405","11411","11412","11413"]


function App() {
  const [data, setData] = useState(sampleData) // need to be linkd to queryZipcode function


  return (
    <div className="App">
      <header className="App-header">
      </header>
      {  <NavBar/> /* Navbar goes here */}

        <SearchBar />

      {/* search bar goes here (calls queryzipcode function)*/}
      <InfoTable data={data}/>
    </div>
  );
}

export default App;
