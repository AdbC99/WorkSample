import React from 'react';
import {TextInput} from './InputFields';
import { render, fireEvent } from "@testing-library/react";

test('test text input changes as required', () => {

    const onChange = () => {
        console.log('Test fired onChange');
    }

    const rend = render(
        <TextInput placeHolder="dave" onChange={onChange}></TextInput>,
    );

    const input = rend.getByTestId('text-input');

    fireEvent.change(input, { target: { value: "bob" } });
    
    expect(input.value).toBe("bob");
});