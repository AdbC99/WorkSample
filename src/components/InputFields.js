import React, {useState} from 'react';
import '../styles/material-input-alikes.css';

const withValidName = WrappedComponent => ({onChange, ...props}) => {

    const handleChange = (event)=>{

        // Remove punctuation
        event.target.value = event.target.value.replace(/[^ZA-Z-Za-z-'.\s]/g,'');

        if (onChange)  onChange(event);
    }

    return(
        <WrappedComponent onChange={handleChange} {...props}></WrappedComponent>
    )
}

const withValidNumber = WrappedComponent => ({onChange, onError, ...props}) => {

    const [err, setErr] = useState(null);

    const handleChange = (event)=>{
  
        event.target.value = event.target.value.replace(/\D/g,'');

        if (event.target.value.startsWith("0"))
        {
            let error = "Salary cannot start with a zero";
            setErr(error);
            if (onError) onError(error)
        }
        else
        {
            setErr(null);
            if (onError) onError(null)
        }

        if (onChange)  onChange(event);
    }

    return(
        <WrappedComponent onChange={handleChange} {...props} error={err}></WrappedComponent>
    )
}

const withValidDate = WrappedComponent => ({onChange, onError, ...props}) => {

    const [err, setErr] = useState(null);

    const handleChange = (event)=>{
  
        event.target.value = event.target.value.replace(/[^0-9/]+/g,'');

        if (!event.target.value.match('^[0-9]{2}/[0-9]{2}/[0-9]{2}$'))
        {
            let error = "Date format must be DD/MM/YY";
            setErr(error);
            if (onError) onError(error);
        }
        else
        {
            setErr(null);
            if (onError)  onError(null);
        }

        if (onChange) onChange(event);
    }

    return(
        <WrappedComponent onChange={handleChange} {...props} error={err}></WrappedComponent>
    )
}

const TextInput = ({onChange, placeHolder, error, ...props}) => {
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
        <div className="floating-input-container full-width">
            <input data-testid='text-input' className="floating-label-input" type="text" onChange={handleChange} {...props}></input>
            <span className={(labelStaysUp)?"floating-label stay-up":"floating-label"}>{placeHolder}</span>
            <span className="floating-input-error-label">{error}</span>
        </div>
    );
}

const NameInput = withValidName(TextInput);
const NumberInput = withValidNumber(TextInput);
// FIXME: Using a custom component here to display Date to sit inline with the work specification
// however a date picker component with calendar would be nicer
const DateInput = withValidDate(TextInput);

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
    DateInput,
    NameInput,
    Submit
}