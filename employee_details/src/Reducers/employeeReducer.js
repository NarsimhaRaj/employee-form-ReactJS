import actionType from "../actions/actionTypes";

const initialState = {
    employeeId: null,
    employeeName: null,
    designation: null,
    companyName: null,
    companyAddress: null,
    contactNumber: null,
    email: null,
    errors: {
        employeeId: null,
        employeeName: null,
        designation: null,
        companyName: null,
        companyAddress: null,
        contactNumber: null,
        email: null
    }
}

function employeeReducer(state = initialState, action) {

    switch (action.type) {
        case actionType.SET_EMP_ID:
            return state = { ...state, employeeId: action.value };
        case actionType.SET_EMP_ID_ERROR:
            return state = { ...state, errors: { ...state.errors, employeeId: action.value } };
        case actionType.SET_EMP_EMAIL:
            return state = { ...state, email: action.value };
        case actionType.SET_EMP_EMAIL_ERROR:
            return state = { ...state, errors: { ...state.errors, email: action.value } };
        case actionType.SET_EMP_NAME:
            return state = { ...state, employeeName: action.value };
        case actionType.SET_EMP_NAME_ERROR:
            return state = { ...state, errors: { ...state.errors, employeeName: action.value } };
        case actionType.SET_EMP_DESIGNATION:
            return state = { ...state, designation: action.value };
        case actionType.SET_EMP_DESIGNATION_ERROR:
            return state = { ...state, errors: { ...state.errors, designation: action.value } };
        case actionType.SET_COMP_NAME:
            return state = { ...state, companyName: action.value };
        case actionType.SET_COMP_NAME_ERROR:
            return state = { ...state, errors: { ...state.errors, companyName: action.value } };
        case actionType.SET_EMP_CONTACT_NO:
            return state = { ...state, contactNumber: action.value };
        case actionType.SET_EMP_CONTACT_NO_ERROR:
            return state = { ...state, errors: { ...state.errors, contactNumber: action.value } };
        case actionType.SET_COMP_ADDRESS:
            return state = { ...state, companyAddress: action.value };
        case actionType.SET_COMP_ADDRESS_ERROR:
            return state = { ...state, errors: { ...state.errors, companyAddress: action.value } };
        default:
            return state;
    }
}

export default employeeReducer;