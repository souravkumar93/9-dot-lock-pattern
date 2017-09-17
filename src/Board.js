import React from 'react';
import Dot from './Dot.js';
import './Board.css';

export default class Board extends React.Component {

    onMouseClickHandler(evt) {
        let nodeValue = this.getNodeValue(evt.target);
        this.setPattern(nodeValue);
    }

    onMouseDownHandler(evt) {
        //this.props.startCapture();
    }

    onMouseUpHandler(evt) {
        //this.props.stopCapture();
    }

    onMouseEnterHandler(evt) {
        let nodeValue = this.getNodeValue(evt.target);
        this.setPattern(nodeValue);
    }

    getNodeValue(node) {
        let nodeValue = node.getAttribute('data');
        return nodeValue;
    }

    setPattern(newNodeValue) {
        this.props.updatePattern(newNodeValue);
    }

    render() {
        return (
            <div className="board" onDragEnd={this.props.onDragEndHandler}>
                <div className="board-horizontal">
                    <Dot
                        onMouseClick={this.onMouseClickHandler.bind(this)}
                        onMouseEnter={this.onMouseEnterHandler.bind(this)}
                        onMouseDown={this.onMouseDownHandler.bind(this)}
                        onMouseUp={this.onMouseUpHandler.bind(this)}
                        id="1" />
                    <Dot
                        onMouseClick={this.onMouseClickHandler.bind(this)}
                        onMouseEnter={this.onMouseEnterHandler.bind(this)}
                        onMouseDown={this.onMouseDownHandler.bind(this)}
                        onMouseUp={this.onMouseUpHandler.bind(this)}
                        id="2" />
                    <Dot
                        onMouseClick={this.onMouseClickHandler.bind(this)}
                        onMouseEnter={this.onMouseEnterHandler.bind(this)}
                        onMouseDown={this.onMouseDownHandler.bind(this)}
                        onMouseUp={this.onMouseUpHandler.bind(this)}
                        id="3" />
                </div>
                <div className="board-horizontal">
                    <Dot
                        onMouseClick={this.onMouseClickHandler.bind(this)}
                        onMouseEnter={this.onMouseEnterHandler.bind(this)}
                        onMouseDown={this.onMouseDownHandler.bind(this)}
                        onMouseUp={this.onMouseUpHandler.bind(this)}
                        id="4" />
                    <Dot
                        onMouseClick={this.onMouseClickHandler.bind(this)}
                        onMouseEnter={this.onMouseEnterHandler.bind(this)}
                        onMouseDown={this.onMouseDownHandler.bind(this)}
                        onMouseUp={this.onMouseUpHandler.bind(this)}
                        id="5" />
                    <Dot
                        onMouseClick={this.onMouseClickHandler.bind(this)}
                        onMouseEnter={this.onMouseEnterHandler.bind(this)}
                        onMouseDown={this.onMouseDownHandler.bind(this)}
                        onMouseUp={this.onMouseUpHandler.bind(this)}
                        id="6" />
                </div>
                <div className="board-horizontal">
                    <Dot
                        onMouseClick={this.onMouseClickHandler.bind(this)}
                        onMouseEnter={this.onMouseEnterHandler.bind(this)}
                        onMouseDown={this.onMouseDownHandler.bind(this)}
                        onMouseUp={this.onMouseUpHandler.bind(this)}
                        id="7" />
                    <Dot
                        onMouseClick={this.onMouseClickHandler.bind(this)}
                        onMouseEnter={this.onMouseEnterHandler.bind(this)}
                        onMouseDown={this.onMouseDownHandler.bind(this)}
                        onMouseUp={this.onMouseUpHandler.bind(this)}
                        id="8" />
                    <Dot
                        onMouseClick={this.onMouseClickHandler.bind(this)}
                        onMouseEnter={this.onMouseEnterHandler.bind(this)}
                        onMouseDown={this.onMouseDownHandler.bind(this)}
                        onMouseUp={this.onMouseUpHandler.bind(this)}
                        id="9" />
                </div>
            </div>
        )
    }
}