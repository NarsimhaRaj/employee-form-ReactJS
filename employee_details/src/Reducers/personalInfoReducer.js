import actionType from "../actions/actionTypes";


const initialState = {
    DOB: null,
    gender: null,
    maritalStatus: null,
    homeAddress: null,
    homeContactNumber: null,
    errors: {
        DOB: null,
        gender: null,
        maritalStatus: null,
        homeAddress: null,
        homeContactNumber: null
    }
}

const personalInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SET_DOB:
            return state = { ...state, DOB: action.value, errors: { ...state.errors, DOB: null } };
        case actionType.SET_DOB_ERROR:
            return state = { ...state, errors: { ...state.errors, DOB: action.value } };
        case actionType.SET_GENDER:
            return state = { ...state, gender: action.value, errors: { ...state.errors, gender: null } };

        case actionType.SET_GENDER_ERROR:
            return state = { ...state, errors: { ...state.errors, gender: action.value } };

        case actionType.SET_MARITAL_STATUS:
            return state = { ...state, maritalStatus: action.value, errors: { ...state.errors, maritalStatus: null } };

        case actionType.SET_MARITAL_STATUS_ERROR:
            return state = { ...state, errors: { ...state.errors, maritalStatus: action.value } };

        case actionType.SET_HOME_ADDRESS:
            return state = { ...state, homeAddress: action.value, errors: { ...state.errors, homeAddress: null } };

        case actionType.SET_HOME_ADDRESS_ERROR:
            return state = { ...state, errors: { ...state.errors, homeAddress: action.value } };
        case actionType.SET_HOME_CONTACT_NO:
            return state = { ...state, homeContactNumber: action.value, errors: { ...state.errors, homeContactNumber: null } };
        case actionType.SET_HOME_CONTACT_NO_ERROR:
            return state = { ...state, errors: { ...state.errors, homeContactNumber: action.value } };
        default:
            return state;
    }
}

export default personalInfoReducer;