import React from 'react';
import {NameInput} from './InputFields';
import { render, fireEvent} from "@testing-library/react";

// FIXME: Demonstrating only one test here rather than complete coverage
test('test name input changes reject non alphanumerics apart from [\'-. ]', (done) => {
    const onChange = (event) => {
        expect(event.target.value).toBe("Bob O'Reilly-Simpson esq.");
        done();
    }

    const rend = render(
        <NameInput placeHolder="dave" onChange={onChange}></NameInput>,
    );

    const input = rend.getByTestId('text-input');

    expect(input.value).toBe("");

    fireEvent.change(input, { target: { value: "1234567890Bob O',Reilly-Simpson esq.;[]~`!@#$%^&*()_+¡™£¢§ˆ¶•ªº–≠“‘" } });

    expect(input.value).toBe("Bob O'Reilly-Simpson esq.");
});