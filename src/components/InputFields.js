import React, {useState} from 'react';
import FloatingLabelInput from 'react-floating-label-input';
import '../styles/material-input-alikes.css';

const withValidNumber = WrappedComponent => ({onChange, ...props}) => {
    return(
        <WrappedComponent onChange={onChange} {...props}></WrappedComponent>
    )
}

const TextInput = ({onChange, placeHolder, ...props}) => {
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
        <div className="text-input-container full-width">
            <input data-testid='text-input' className="floating-label-input" type="text" onChange={handleChange} {...props}></input>
            <span className={(labelStaysUp)?"floating-label stay-up":"floating-label"}>{placeHolder}</span>
        </div>
    );
}

const NumberInput = withValidNumber(TextInput);

const Submit = ({label, disable}) => {
    return (
        <>
            {
                (disable === true)?
                    <input className='color-button ml-auto' type="submit" value={label} disabled></input>:
                    <input className='color-button ml-auto' type="submit" value={label} ></input>
            }
        </>   
    )
}

export {
    TextInput,
    NumberInput,
    Submit
}