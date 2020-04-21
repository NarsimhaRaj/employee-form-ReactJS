import { connect } from 'react-redux';
import PersonalForm from '../components/personalForm';
import { setEmployeeDetails } from '../actions/employeeActions';

const mapStatetoProps = (state) => {
    return {
        personalInfo: state.personalInfo
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setEmployeeDetails: (actionType, value, error) => {
            dispatch(setEmployeeDetails(actionType, value, error));
        }
    }
}
export default connect(mapStatetoProps, mapDispatchToProps)(PersonalForm);