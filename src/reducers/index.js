function setPatternReducer(state = [], startCapture, stopCapture, action) {
    switch (action.type) {
        case 'SET_PATTERN':
            if (!startCapture)
                return [];
            if (stopCapture)
                return state;
            if (state.indexOf(action.pattern) === -1)
                return state.concat(action.pattern);
            return state;
        default:
            return [];
    }
}

function matchPatternReducer(state = [], startCapture, stopCapture, action) {
    switch (action.type) {
        case 'MATCH_PATTERN':
            if (!startCapture)
                return [];
            if (stopCapture)
                return state;
            if (state.indexOf(action.pattern) === -1)
                return state.concat(action.pattern);
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
            if (state.pattern.join("") === state.matchingPattern.join("")) {
                console.log("success.")
                return true;
            }
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
            return state;
    }
}

function stopCaptureReducer(state = false, action) {
    switch (action.type) {
        case 'STOP_CAPTURE':
            return true;
        default:
            return state;
    }
}

export function rootReducer(state = {}, action) {
    console.log(state.pattern);
    return {
        pattern: setPatternReducer(state.pattern, state.startCapture, state.stopCapture, action),
        matchingPattern: matchPatternReducer(state.matchingPattern, state.startCapture, state.stopCapture, action),
        ifCorrect: checkPatternReducer(state, action),
        message: messageReducer(state.message, action),
        startCapture: startCaptureReducer(state.startCapture, action),
        stopCapture: startCaptureReducer(state.stopCapture, action),
    }
}