import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'

function App() {

  const [ photo, setPhoto ] = useState();

useEffect(() => {
  axios
  .get("https://api.nasa.gov/planetary/apod?api_key=vwlEuQ7sN1bhEHHjV5ETyX3aLTyIkzoLzWpN7Gde")
  .then(response => {
    setPhoto(response.data);
    console.log('photo', photo);
    console.log('response', response);
  })
  .catch(err => {console.log('--Error Occured--', err)
  })
}, [])


  return (
   
  );
}

export default App;


//This code was in the return without the curly bois
{/* <div className="App">
<p>
  Read through the instructions in the README.md file to build your NASA
  app! Have fun <span role="img" aria-label='go!'>🚀</span>!
</p>
</div> */}