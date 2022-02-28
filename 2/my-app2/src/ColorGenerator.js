import React, { Component } from 'react'
import Button from './button'
import Color from './Color';

export default class ColorGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: []
        }
        this.generatRndoms = this.generatRndoms.bind(this)
    }
    generatRndoms() {
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        this.setState({
            colors: ["#" + randomColor, ...this.state.colors]
        })
        console.log(this.state.colors)
    }
    render() {
        return (
            <div >ColorGenerator
                <Button clickHandler={this.generatRndoms} title={'Add Color'} />
                <Color title={this.state.colors} background={this.state.colors} />
            </div>


        )
    }
}
