const intialState = {
    pattern: [],
    matchingPattern: [],
    message: "",
    isMouseDown: false,
    mode: "capture"
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
            console.log('here');
            if (state.pattern.join("") === state.matchingPattern.join("")) {
                alert("Pattern unlocked !.")
            } else {
                alert("Try again !");
            }
            modifiedState = Object.assign({}, state, {
                isMouseDown: false,
                matchingPattern: []
            });
            break;

        case 'START_CAPTURE':
            if (state.mode === 'capture') {
                modifiedState = Object.assign({}, state, {
                    isMouseDown: true,
                    pattern : []
                });
            }else if(state.mode === 'match'){
                modifiedState = Object.assign({}, state, {
                    isMouseDown: true,
                    matchingPattern : []
                });
            }
            break;

        case 'STOP_CAPTURE':
            modifiedState = Object.assign({}, state, {
                isMouseDown: false
            });
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