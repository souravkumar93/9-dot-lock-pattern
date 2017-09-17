export function setPatternAction(pattern) {
    return {
        type: "SET_PATTERN",
        pattern
    }
}

export function matchPatternAction(pattern) {
    return {
        type: "MATCH_PATTERN",
        pattern
    }
}

export function checkPatternAction() {
    return {
        type: "CHECK_PATTERN"
    }
}

export function startCaptureAction() {
    return {
        type: "START_CAPTURE"
    }
}

export function stopCaptureAction() {
    return {
        type: "STOP_CAPTURE"
    }
}


export function modeChangeAction(mode) {
    return {
        type: "CHANGE_MODE",
        value: mode
    }
}
