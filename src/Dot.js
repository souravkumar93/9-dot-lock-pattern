import React from 'react';
import './Dot.css';

export default class Dot extends React.Component {
    render() {
        return (
            <div className="patt-dots patt-circ"
                data={this.props.id}
                onClick={this.props.onMouseClick}
                onMouseEnter={this.props.onMouseEnter}
                onMouseDown={this.props.onMouseDown}
                onMouseUp={this.props.onMouseUp}>
                {this.props.id}
            </div>
        )
    }
}