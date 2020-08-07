import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

const classes = [
    { key: 'w', value: 'wizard', text: 'Wizard'},
    { key: 'k', value: 'knight', text: 'Knight'},
    { key: 'r', value: 'rogue', text: 'Rogue'},
    { key: 'c', value: 'cleric', text: 'Cleric'},
]

const CharacterCreator = () => {
    // const [value, setForm] = useState(null);

    // handleChange = (e, {value}) => setForm({value})

    return ( 
        <>
            <h1>Character Creator</h1>
            <Form>
                <Form.Field>
                    <label>Character Name </label>
                    <input type="text" id="character-name" />
                </Form.Field>
                <Form.Select
                    fluid
                    options={classes}
                    label='Class'
                    placeholder='Class'
                />
                <Form.Button>Submit</Form.Button>
            </Form>
        </>
    );
}
 
export default CharacterCreator;