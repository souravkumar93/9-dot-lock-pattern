const intialState = {
    pattern: [],
    matchingPattern: [],
    message: "",
    startCapture: false,
    stopCapture: false
};

const deepCopy = function(obj){
    return JSON.parse(JSON.stringify(obj));
}

export function rootReducer(state , action) {
    switch (action.type) {
        case 'INIT':
            return intialState;

        case 'SET_PATTERN':
            if (state.startCapture && !state.stopCapture && state.pattern.indexOf(action.pattern) === -1)
                state.pattern = state.pattern.concat(action.pattern);
            console.log(state.pattern);
            return state;

        case 'MATCH_PATTERN':
            if (state.startCapture && !state.stopCapture && state.matchingPattern.indexOf(action.pattern) === -1)
                state.matchingPattern = state.matchingPattern.concat(action.pattern);
            console.log(state.matchingPattern);
            return state;

        case 'CHECK_PATTERN':
            if (state.pattern.join("") === state.matchingPattern.join("")) {
                console.log("success.")
            }
            return state;

        case 'START_CAPTURE':
            state.startCapture = true;
            return state;

        case 'STOP_CAPTURE':
            state.stopCapture = true;
            return state;   

        case 'RESET_CAPTURE':
            state.startCapture = false;
            state.stopCapture = false;
            return state;

        default:
            return state || intialState;

    }
}