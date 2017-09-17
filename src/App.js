import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { connect } from 'react-redux';
import './App.css';
import Board from './Board.js';
import { setPatternAction, matchPatternAction, checkPatternAction, startCaptureAction, stopCaptureAction, resetCaptureAction } from './actions';

class App extends Component {

  constructor() {
    super();
    this.state = {
      mode: 'capture'
    }
  }

  tabChangeHandler(index, lastIndex) {
    if (index === 0) {
      this.setState({
        mode: 'capture'
      })
    } else {
      this.setState({
        mode: 'match'
      })
    }
    this.props.resetCapture();
  }

  render() {
    return (
      <div className="App">
        <div className="Heading">Welcome to the pattern lock template</div>
        <Tabs className="Tabs" onSelect={this.tabChangeHandler.bind(this)}>

          <TabList className="TabList">
            <Tab className="Tab" selectedClassName="selected-tab">Set Pattern</Tab>
            <Tab className="Tab" selectedClassName="selected-tab"> Try Pattern</Tab>
          </TabList>

          <TabPanel className="TabPanel">
            <Board
              pattern={this.props.pattern}
              updatePattern={this.props.updatePattern.bind(this)}
              startCapture={this.props.startCapture.bind(this)}
              stopCapture={this.props.stopCapture.bind(this)}
              mode={this.state.mode} 
              ifMouseDown={this.props.ifMouseDown}/>

            <div className="info">Set your pattern</div>

          </TabPanel>
          <TabPanel className="TabPanel">
            <Board
              pattern={this.props.matchingPattern}
              updatePattern={this.props.matchPattern.bind(this)}
              startCapture={this.props.startCapture.bind(this)}
              stopCapture={this.props.stopCapture.bind(this)}
              mode={this.state.mode} 
              ifMouseDown={this.props.ifMouseDown}/>
              
            <div>{this.props.message}</div>
            <div className="info">Try it out</div>
          </TabPanel>

        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pattern: state.pattern || [],
    matchingPattern: state.matchingPattern || [],
    message: state.message || "",
    ifMouseDown : state.ifMouseDown || false
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePattern: (pattern) => dispatch(setPatternAction(pattern)),
    matchPattern: (pattern) => dispatch(matchPatternAction(pattern)),
    checkPattern: () => dispatch(checkPatternAction()),
    startCapture: () => dispatch(startCaptureAction()),
    stopCapture: (mode) => {
      if (mode === 'match') {
        dispatch(checkPatternAction());
      }
      dispatch(stopCaptureAction());
    },
    resetCapture : () => dispatch(resetCaptureAction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);