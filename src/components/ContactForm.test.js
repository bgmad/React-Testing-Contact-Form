import React from 'react';
import { getByText, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

it("ContactForm component renders", () => {
    render(<ContactForm/>);
});

const fields = [
    {
        tag: 'input',
        name: 'firstName',
        testVal: 'My'
    },
    {
        tag: 'input',
        name: 'lastName',
        testVal: 'Full Name'
    },
    {
        tag: 'input',
        name: 'email',
        testVal: 'firstandlastname@gmail.com'
    },
    {
        tag: 'textarea',
        name: 'message',
        testVal: 'I really enjoy doing all of this tedious work.'
    }

]

it("Contains appropriate input fields", () => {
    render(<ContactForm/>);

    const fnInput = document.querySelector(`input[name=firstName]`);
    const lnInput = document.querySelector(`input[name=lastName]`);
    const emailInput = document.querySelector(`input[name=email]`);
    const messageInput = document.querySelector(`textArea[name=message]`);
    

    // const inputs = fields.map(el => document.querySelector(`${el.tag}[name=${el.name}]`));
    // const submit = document.querySelector('input[type=submit]');
    
    // inputs.forEach((el, i) => userEvent.type(el, fields[i].testVal));
    // console.log(submit);
    // screen.act(() => userEvent.click(submit));

    // expect(screen.getByText(/firstName/i)).toBeTruthy()

})