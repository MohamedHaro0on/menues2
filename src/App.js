import "./App.css";
import Categories from "./Categroies";


import {useState} from "react";
import Menue from "./Menue";

const App = () =>{
  const [cat , setCat ] = useState("all");

  const catHandler = (newCat) =>{
    setCat(newCat);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="mainHeading"> Our Menues </h1>
      </header>
      <section>
        <Categories  catHandler = {catHandler} />
      </section>
      <Menue cat = {cat}/>
    </div>
  );
}

export default App;