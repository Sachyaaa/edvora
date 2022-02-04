import useFetch from "./useFetch";
import Cards from "./Cards";
import React, { useState } from 'react';
import Dropdown from "./Dropdown";
import Products from "./Products";



function App() {
  const data = useFetch('https://assessment-edvora.herokuapp.com/');





  
  return (
    <div className="App">
      {data && data.length>0 &&<Dropdown data={data} />}
      {data && data.length>0 &&<Products data={data} />}
     
    
    </div>
  );
}

export default App;
