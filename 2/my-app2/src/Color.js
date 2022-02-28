import React, { Component } from 'react';
import './colorCss.css'
class Color extends Component {
    render() {
        return (
            <div>
                <ul className="ul">
                    {this.props.title.map(i =>
                        <li className="li">
                            <span className="span" style={{ background:i}}></span>
                            {i}
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Color;