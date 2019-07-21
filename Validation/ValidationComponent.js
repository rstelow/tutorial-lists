import React from 'react';
import './Validation.css';

const validation = (props) => {
   let validateLength = "";
        if (props.length < 5 ) {
           validateLength = 'This word needs to be greater than or equal to 5 chars';
        }else if (props.length > 10){
            validateLength =  'This word needs to be less than or equal to 10 chars';
        }
        console.log(validateLength);
    return (
        <div className="Validation">
            <p> {validateLength} </p>
        </div>
    )    
};

export default validation;