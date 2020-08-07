import React, { useState, Component } from 'react';
import useForm from '../CustomHooks';
import { Button, Checkbox, Form } from 'semantic-ui-react'

const classes = [
    { key: 'w', value: 'Wizard', text: 'Wizard'},
    { key: 'k', value: 'Knight', text: 'Knight'},
    { key: 'r', value: 'Rogue', text: 'Rogue'},
    { key: 'c', value: 'Cleric', text: 'Cleric'},
]

class CharacterCreator extends Component {
    state = { 
        formData: {
            name: '',
            class: ''
        }
     }

     handleInputChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
            formData,
        });
    }

    handleSelectionChange = (e, {value}, name) => {
        this.setState({
            formData: {...this.state.formData, [name]: value}
        });
     }

     handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddCharacter(this.state.formData);
    }

    render() { 
        return ( 
            <>
             <h1>Character Creator</h1>
            <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                    <label>Character Name </label>
                    <input 
                        type="text" 
                        name="name" 
                        onChange={this.handleInputChange}
                        value={this.state.formData.name}
                    />
                </Form.Field>
                <Form.Select
                    fluid
                    options={classes}
                    name='class'
                    label='Class'
                    placeholder='Class'
                    onChange= {(e, value) => {this.handleSelectionChange(e, value, 'class')}}
                    value={this.state.formData.class}
                />
                <Form.Button type="submit">Submit</Form.Button>
            </Form>
            </>
         );
    }
}
 
export default CharacterCreator;


//Custom Hook attempt:
// const CharacterCreator = () => {

//     const add = () => {
//         alert(`added ${inputs.name} the ${inputs.class}!`);
//     }

//     const {inputs, handleInputChange, handleSubmit} = useForm(add);


    // return ( 
    //     <>
    //         <h1>Character Creator</h1>
    //         <Form onSubmit={handleSubmit}>
    //             <Form.Field>
    //                 <label>Character Name </label>
    //                 <input 
    //                     type="text" 
    //                     name="name" 
    //                     onChange={handleInputChange}
    //                     value={inputs.name}
    //                 />
    //             </Form.Field>
    //             <Form.Select
    //                 fluid
    //                 options={classes}
    //                 name="class"
    //                 label='Class'
    //                 placeholder='Class'
    //                 // onChange={handleInputChange}
    //                 value={inputs.class}
    //             />
    //             <Form.Button type="submit">Submit</Form.Button>
    //         </Form>
    //     </>
    // );
// }
 
// export default CharacterCreator;