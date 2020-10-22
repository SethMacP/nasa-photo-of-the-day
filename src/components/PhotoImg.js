//pass in img src & title, pass back up div holding image with title ABOVE it.
import React from 'react';

function PhotoImg (props) {
    
    const thisData = props.data
   
   
    return(
<div>
    <h1>{thisData.title}</h1>
    <img src = {thisData.url} />
</div>



    )
}
export default PhotoImg;