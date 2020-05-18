import React, { Component } from 'react';

export class App extends Component {
    constructor() {
        super();
        this.state = {
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {

        const { name, type, value, checked } = event.target;

        console.log(`name: ${name}, value: ${value}`)
        type === 'checkbox'
            ? this.setState({
                dietaryRequirements: {
                    [name]: checked
                }
            })
            : this.setState({
                [name]: value
            });

        console.log(this.state);
    };

    // handleSubmit(event) {
    //     alert(`
    //     First Name: ${this.state.firstName}
    //     Last Name: ${this.state.lastName}
    //     Age: ${this.state.age}
    //     Gender: ${this.state.gender}
    //     Dietary requirements: ${this.getDietStrings()}
    //     `)
    // };

    render() {

        return (
            <div>
                Nothing. There is nothing here yet.
            </div>
        )
    }
}
export default App;
