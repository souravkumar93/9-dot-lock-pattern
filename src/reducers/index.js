const intialState = {
    pattern: [],
    matchingPattern: [],
    message: "",
    ifMouseDown: false
};

export function rootReducer(state, action) {
    if (!state) {
        return intialState;
    }
    let modifiedState;
    switch (action.type) {
        case 'INIT':
            return intialState;
            break;
        case 'SET_PATTERN':
            if (state.ifMouseDown && state.pattern.indexOf(action.pattern) === -1) {
                modifiedState = Object.assign({}, state, {
                    pattern: state.pattern.concat(action.pattern)
                });
            } else
                modifiedState = Object.assign({}, state);
            break;
        case 'MATCH_PATTERN':
             if (state.ifMouseDown && state.matchingPattern.indexOf(action.pattern) === -1) {
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
                ifMouseDown : false,
                matchingPattern: []
            });
            break;
        case 'START_CAPTURE':
            modifiedState = Object.assign({}, state, {
                ifMouseDown: true
            });
            break;
        case 'STOP_CAPTURE':
            modifiedState = Object.assign({}, state, {
                ifMouseDown: false
            });
            break;
        case 'RESET_CAPTURE':
            modifiedState = Object.assign({}, state, {
                ifMouseDown: false
            });
            break;
        default:
            modifiedState = Object.assign({}, state, {});
    }
    return modifiedState;
}