import React from 'react';

const valid = (props) =>{
  let para = 'Text too long!!!!!';

  if (props.inputlen <= 8){

     para = 'Text too small!!!!';
  }
  return( 
    <div>
        <p>{para}</p>
    </div>
  );
};

export default valid;