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
    debugger;
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