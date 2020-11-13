import React, { Component } from 'react';
import Button from '../../Components/UI/Buttons/Buttons.js';
import Input from '../../Components/UI/Input/Input.js';
import List from '../../Components/UI/List/List.js';

class Employee extends Component {
    state = {
        value: '',
        store: []
    }

    onClickHandler = () => {
        let stored = [...this.state.store];
        stored.push(this.state.value);
        this.setState({ store: stored }, () => {
            console.log(this.state.store);
        })

    }

    onChangeHandler = (event) => {
        // console.log(event.target.value)
        this.setState({ value: event.target.value })
    }

    render() {
        return (
            <div>
                <Input
                    type="text"
                    placeholder="Enter Employee Name"
                    changed={this.onChangeHandler}
                />
                <Button
                    btnType="Primary"
                    clicked={this.onClickHandler}>Add Employee</Button>
                <hr />
                <ol>
                    {this.state.store.map (str => (
                        <List key = {str}>{str}</List>
                    ))}
                </ol>
            </div>
        )
    }
}

export default Employee;
