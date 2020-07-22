import React, {useState} from 'react';
import FloatingLabelInput from 'react-floating-label-input';
import '../styles/material-input-alikes.css';

const TextInput = ({onChange, placeHolder}) => {
    const [labelStaysUp, setLabelStaysUp] = useState(false);

    const handleChange = (event) =>
    {
        if ((event.target.value != null)&&(event.target.value !== ""))
        {
            setLabelStaysUp(true);
        }
        else
            setLabelStaysUp(false);
        
        onChange(event);
    }

    return (
        <div className="text-input-container">
            <input className="floating-label-input" type="text" onChange={handleChange}></input>
            <span class={(labelStaysUp)?"floating-label stay-up":"floating-label"}>{placeHolder}</span>
        </div>
    );
}

const NumberInput = TextInput;

const Submit = ({text}) => {
    return (
        <input type="submit" value={text} ></input>
    )
}

export {
    TextInput,
    NumberInput,
    Submit
}