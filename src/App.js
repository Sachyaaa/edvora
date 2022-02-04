import useFetch from "./useFetch";
import Cards from "./Cards";
import React, { useState } from 'react';
import Dropdown from "./Dropdown";



function App() {
  const data = useFetch('https://assessment-edvora.herokuapp.com/');





  
  return (
    <div className="App">
      {data && <Dropdown data={data} />}
      {data && <Cards data={data} />}
     
    
    </div>
  );
}

export default App;
