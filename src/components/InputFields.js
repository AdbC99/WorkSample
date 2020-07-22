import React from 'react';

const fullWidth = {
    width:'100%',
}

const TextInput = ({onChange, placeHolder}) => {
    return (
        <input type="text" onChange={onChange} placeholder={placeHolder} style={fullWidth}></input>
    )
}

const NumberInput = ({onChange, placeHolder}) => {
    return (
        <input type="number" onChange={onChange} placeholder={placeHolder} style={fullWidth}></input>
    )
}

const Submit = ({text}) => {
    return (
        <input type="submit" value={text} style={fullWidth}></input>
    )
}

export {
    TextInput,
    NumberInput,
    Submit
}