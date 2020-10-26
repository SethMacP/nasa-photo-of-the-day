//pass in img src & title, pass back up div holding image with title ABOVE it.
import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
function PhotoImg (props) {
    
    const thisData = props.data
   
    
    return(
<>
    <CardTitle 
    className="text-center" 
    padding="10px" 

    inverse color="primary">
        
        {thisData.title}</CardTitle>
    <CardImg  
    width="25%" 
    height="25%"  
    src = {thisData.url} />
</>



    )
}
export default PhotoImg;