import React, { useState, useEffect } from "react";
import axios from 'axios';
import PhotoFooter from './components/PhotoFooter';
import PhotoImg from './components/PhotoImg';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import "./App.css";


function App() {
  const [ photo, setPhoto ] = useState([]);
  useEffect(() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=vwlEuQ7sN1bhEHHjV5ETyX3aLTyIkzoLzWpN7Gde&date=2020-10-20")
    .then(response => {
      setPhoto(response.data);
    })
    .catch(err => {console.log('--Error Occured--', err)
  })
  }, [])

  
  return (
  <div>
    <Card inverse color="info" >
      <CardBody>
        <PhotoImg 
        data = {photo}
        />
      
        <PhotoFooter
        color = "primary"
        data = {photo}
        />
     
      </CardBody>
    </Card>
  </div>
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






    

    
//     <PhotoFooter
//     photographer = { photo.photographer }
//     date         = { photo.date }
//     explanation  = { photo.explanation }
//     >Needs props </PhotoFooter>