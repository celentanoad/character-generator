import React, { useState } from 'react';
import useForm from '../CustomHooks';
import { Button, Checkbox, Form } from 'semantic-ui-react'

const classes = [
    { key: 'w', value: 'wizard', text: 'Wizard'},
    { key: 'k', value: 'knight', text: 'Knight'},
    { key: 'r', value: 'rogue', text: 'Rogue'},
    { key: 'c', value: 'cleric', text: 'Cleric'},
]

const CharacterCreator = () => {

    const add = () => {
        alert(`added ${inputs.name} the ${inputs.class}!`);
    }

    const {inputs, handleInputChange, handleSubmit} = useForm(add);


    return ( 
        <>
            <h1>Character Creator</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Character Name </label>
                    <input 
                        type="text" 
                        name="name" 
                        onChange={handleInputChange}
                        value={inputs.name}
                    />
                </Form.Field>
                <Form.Select
                    fluid
                    options={classes}
                    name="class"
                    label='Class'
                    placeholder='Class'
                    // onChange={handleInputChange}
                    value={inputs.class}
                />
                <Form.Button type="submit">Submit</Form.Button>
            </Form>
        </>
    );
}
 
export default CharacterCreator;