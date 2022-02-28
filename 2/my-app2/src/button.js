import React, { Component } from 'react';

class Button extends Component {
    
    render() {
        const {title,clickHandler} = this.props
        return (
            <div>
                <button onClick={clickHandler} >
                    {title}
                </button>
            </div>

        );
    }
}


export default Button;