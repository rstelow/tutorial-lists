import React from 'react';
import './CharHelper.css'


const charComponent = (props) => {
    return(
        <div className="CharHelper">            
           <p onClick={props.click}> {props.letter} </p>
        </div>
    )
 
}

export default charComponent;