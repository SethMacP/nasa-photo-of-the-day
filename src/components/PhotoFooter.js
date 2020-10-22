import React from 'react';

function PhotoFooter (props) {
    const footerData = props.data;
    //console.log(footerData);

    return(
        <div>
            <p>{footerData.date}</p>
            <p>{footerData.explanation}</p>
        </div>
    )
}
export default PhotoFooter ;