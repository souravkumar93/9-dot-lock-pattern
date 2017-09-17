const intialState = {
    pattern: [],
    matchingPattern: [],
    message: "",
    isMouseDown: false,
    mode: "capture",
    clearDots: false
};

export function rootReducer(state, action) {
    if (!state) {
        return intialState;
    }
    let modifiedState;
    switch (action.type) {

        case 'INIT':
            return intialState;

        case 'SET_PATTERN':
            if (state.isMouseDown && state.pattern.indexOf(action.pattern) === -1) {
                modifiedState = Object.assign({}, state, {
                    pattern: state.pattern.concat(action.pattern)
                });
            } else
                modifiedState = Object.assign({}, state);
            break;

        case 'MATCH_PATTERN':
            if (state.isMouseDown && state.matchingPattern.indexOf(action.pattern) === -1) {
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
                isMouseDown: false,
                matchingPattern: [],
                clearDots: true
            });
            break;

        case 'START_CAPTURE':
            if (state.mode === 'capture') {
                modifiedState = Object.assign({}, state, {
                    isMouseDown: true,
                    pattern: [],
                    clearDots: false
                });
            } else if (state.mode === 'match') {
                modifiedState = Object.assign({}, state, {
                    isMouseDown: true,
                    matchingPattern: [],
                    clearDots: false
                });
            }
            break;

        case 'STOP_CAPTURE':
            modifiedState = Object.assign({}, state, {
                isMouseDown: false
            });
            if (state.mode === 'capture') {
                alert('Pattern set.');
                modifiedState = Object.assign({}, modifiedState, {
                    clearDots: true
                });
            }
            break;

        case 'CHANGE_MODE':
            modifiedState = Object.assign({}, state, {
                mode: action.value
            });
            break;

        default:
            modifiedState = Object.assign({}, state, {});
    }
    return modifiedState;
}