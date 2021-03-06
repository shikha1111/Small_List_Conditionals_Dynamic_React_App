import React from 'react';
const charstyle = (props) =>{
    const style = {
        display: 'inline-block', 
        color: 'white',
        fontSize : '1000%',
        backgroundColor : 'blue',
        padding: '50px', 
        textAlign: 'center', 
        margin : '16px', 
        border: '5px solid black'
    };
    return (
      <div style= {style} onClick={props.click}>
         {props.character}

      </div>
    );
}
 
export default charstyle;