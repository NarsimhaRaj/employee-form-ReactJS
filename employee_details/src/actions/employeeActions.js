export const setEmployeeDetails = (actionType, value, error) => {
    if (error) {
        return {
            type: actionType,
            value: error
        }
    }
    else {
        return {
            type: actionType,
            value: value
        }
    }
}

export const registerEmployee = (actionType, employee) => {
    return {
        type: actionType,
        payload: employee
    }
}