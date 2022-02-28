import React, { Component } from 'react'
import Button from './Button';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
        this.increase=this.increase.bind(this)
        this.decrease=this.decrease.bind(this)
    };
    increase() {
        this.setState({
            counter: this.state.counter + 1
        });
    };

    decrease() {
        if (this.state.counter > 0) {
            this.setState({
                counter: this.state.counter - 1
            });
        }
    }

    render() {
        return (
            <div>
                <h1>Current Count: {this.state.counter}</h1>
                <Button clickHandler={this.increase} title={'increase'}/>
                <Button clickHandler={this.decrease} title={'decrease'}/>
            </div>
        );
    }
}
