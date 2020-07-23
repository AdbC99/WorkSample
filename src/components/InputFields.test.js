import React from 'react';
import {TextInput} from './InputFields';
import { render, fireEvent} from "@testing-library/react";

test('test text input changes as required', (done) => {
    const onChange = (event) => {
        expect(event.target.value).toBe("bob");
        done();
    }

    const rend = render(
        <TextInput placeHolder="dave" onChange={onChange}></TextInput>,
    );

    const input = rend.getByTestId('text-input');

    expect(input.value).toBe("");

    fireEvent.change(input, { target: { value: "bob" } });

    expect(input.value).toBe("bob");
});