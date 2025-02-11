import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);
const {name,bio, city,color, links} = user

function App() {
  return (
    <div>
      <NavBar />
      <Home color ={color} name={name} city={city}/>
      <About bio={bio} links = {links}/>
    </div>
  );
}

export default App;
