function setPatternReducer(state = {}, action) {
    switch (action.type) {
        case 'SET_PATTERN':
            // if (!state.startCapture)
            //     return [];
            if (state && state.pattern.indexOf(action.pattern) === -1)
                return state.pattern.concat(action.pattern);
            return state;
        default:
            return [];
    }
}

function matchPatternReducer(state = {}, action) {
    switch (action.type) {
        case 'MATCH_PATTERN':
            // if (!state.startCapture)
            //     return [];
            if (state && state.pattern.indexOf(action.pattern) === -1)
                return state.pattern.concat(action.pattern);
            return state;
        default:
            return [];
    }
}

function messageReducer(state = "", action) {
    switch (action.type) {
        case 'SUCCESS_MESSAGE':
            return "Successful!";
        case 'FAILURE_MESSAGE':
            return "Failed!";
        default:
            return state;
    }
}

function checkPatternReducer(state = {}, action) {
    switch (action.type) {
        case 'CHECK_PATTERNS':
            if (state.pattern.join("") === state.matchingPattern.join(""))
                return true;
            return false
        default:
            return false;
    }
}

function startCaptureReducer(state = false, action) {
    switch (action.type) {
        case 'START_CAPTURE':
            return true;
        default:
            return false;
    }
}

function stopCaptureReducer(state = false, action) {
    switch (action.type) {
        case 'STOP_CAPTURE':
            return true;
        default:
            return false;
    }
}

export function rootReducer(state = {}, action) {
    console.log(state.pattern);
    return {
        pattern: setPatternReducer(state, action),
        matchingPattern: matchPatternReducer(state, action),
        ifCorrect: checkPatternReducer(state, action),
        message: messageReducer(state.message, action),
        startCapture: startCaptureReducer(state.startCapture, action),
        stopCapture: startCaptureReducer(state.stopCapture, action),
    }
}