import { connect } from 'react-redux';
import EmployeementForm from '../components/emplyeementForm';
import { setEmployeeDetails } from '../actions/employeeActions';

const mapStatetoProps = (state) => {
    return {
        empForm: state.employment
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setEmployeeDetails: (actionType, value, error) => {
            dispatch(setEmployeeDetails(actionType, value, error));
        }
    }
}
export default connect(mapStatetoProps, mapDispatchToProps)(EmployeementForm);