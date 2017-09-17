import React from 'react';
import Dot from './Dot.js';
import './Board.css';

export default class Board extends React.Component {

    constructor() {
        super();
        this.state = {
            selectedNodes: []
        }
    }

    removeSelectedClass() {
        this.state.selectedNodes.forEach((node) => {
            node.classList.remove('selected');
        })
    }

    makeSelected(node) {
        node.classList.add('selected');
        let selectedNodes = this.state.selectedNodes.slice();
        selectedNodes.push(node);
        this.setState({
            selectedNodes
        });
    }

    onMouseClickHandler(evt) {
        let nodeValue = this.getNodeValue(evt.target);
        this.setPattern(nodeValue);
    }

    onMouseDownHandler(evt) {
        this.removeSelectedClass();
        this.props.startCapture();
        let nodeValue = this.getNodeValue(evt.target);
        this.setPattern(nodeValue);
        this.makeSelected(evt.target);
    }

    onMouseUpHandler(evt) {
        this.props.stopCapture(this.props.mode);
    }

    onMouseEnterHandler(evt) {
        let nodeValue = this.getNodeValue(evt.target);
        this.setPattern(nodeValue);
        if (this.props.isMouseDown)
            this.makeSelected(evt.target);
    }

    getNodeValue(node) {
        let nodeValue = node.getAttribute('data');
        return nodeValue;
    }

    setPattern(newNodeValue) {
        this.props.updatePattern(newNodeValue);
    }

    drawDots(keyStart) {
        let arr = new Array(3).fill(keyStart);
        return arr.map((key) => {
            keyStart++;
            return <Dot
                onMouseClick={this.onMouseClickHandler.bind(this)}
                onMouseEnter={this.onMouseEnterHandler.bind(this)}
                onMouseDown={this.onMouseDownHandler.bind(this)}
                onMouseUp={this.onMouseUpHandler.bind(this)}
                key={keyStart}
                id={keyStart} />
        })
    }

    render() {
        return (
            <div className="board" onDragEnd={this.props.onDragEndHandler}>
                <div className="board-horizontal">
                    {this.drawDots(0)}
                </div>
                <div className="board-horizontal">
                    {this.drawDots(3)}
                </div>
                <div className="board-horizontal">
                    {this.drawDots(6)}
                </div>
            </div>
        )
    }
}