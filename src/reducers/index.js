const intialState = {
    pattern: [],
    matchingPattern: [],
    message: "",
    startCapture: false,
    stopCapture: false
};

export function rootReducer(state, action) {
    if(!state){
        return intialState;
    }
    let modifiedState;
    switch (action.type) {
        case 'INIT':
            return intialState;
            break;
        case 'SET_PATTERN':
            if (state.startCapture && !state.stopCapture && state.pattern.indexOf(action.pattern) === -1) {
                modifiedState = Object.assign({}, state, {
                    pattern: state.pattern.concat(action.pattern)
                });
            } else
                modifiedState = Object.assign({}, state);
            break;
        case 'MATCH_PATTERN':
            if (state.startCapture && !state.stopCapture && state.matchingPattern.indexOf(action.pattern) === -1) {
                modifiedState = Object.assign({}, state, {
                    matchingPattern: state.matchingPattern.concat(action.pattern)
                });
            } else
                modifiedState = Object.assign({}, state);
            break;
        case 'CHECK_PATTERN':
            if (state.pattern.join("") === state.matchingPattern.join("")) {
                alert("Pattern unlocked !.")
            } else {
                alert("Try again !");
            }
            modifiedState = Object.assign({}, state, {
                startCapture: false,
                stopCapture: false,
                matchingPattern: []
            });
            break;
        case 'START_CAPTURE':
            modifiedState = Object.assign({}, state, {
                startCapture: true,
                stopCapture: false
            });
            break;
        case 'STOP_CAPTURE':
            modifiedState = Object.assign({}, state, {
                stopCapture: true,
                startCapture : false
            });
            break;
        case 'RESET_CAPTURE':
            modifiedState = Object.assign({}, state, {
                startCapture: false,
                stopCapture: false
            });
            break;
        default:
            modifiedState = Object.assign({}, state, {});
    }
    return modifiedState;
}