import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
  } from 'reactstrap';




function PhotoFooter (props) {
    const footerData = props.data;
    //console.log(footerData);

    return(
            <>
                <CardSubtitle className="text-center" >{footerData.date}</CardSubtitle>
                <CardText className="text-center">{footerData.explanation}</CardText>    
            </>

    )
}
export default PhotoFooter ;


