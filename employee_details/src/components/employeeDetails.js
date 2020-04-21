/* eslint-disable no-useless-constructor */
import React, { useState } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { Modal } from './common/shared/modal';
import actionTypes from '../actions/actionTypes';

function EmployeeDetails(props) {

    let history = useHistory();
    let [showModal, setShowModal] = useState(false);

    const handleClick = (event) => {
        let data={
            "name":props.empForm.employeeName,
            "id":parseInt(props.empForm.employeeId),
            "email":props.empForm.email,
            "designation":props.empForm.designation,
            "companyName":props.empForm.companyName,
            "companyAddress":props.empForm.companyAddress,
            "companyContact":props.empForm.contactNumber,
            "gender":props.personalInfo.gender,
            "homeAddress":props.personalInfo.homeAddress,
            "DOB":props.personalInfo.DOB,
            "homeContact":props.personalInfo.homeContactNumber,
            "maritalStatus":props.personalInfo.maritalStatus
        }
        props.saveEmployeeDetails(actionTypes.REGISTER_EMP_REQUEST,data);
        setShowModal(true);
    }
    return (
        <React.Fragment>
            <div className="employee-info">
                <div><label>EmployeeDetails</label></div>
                <div><button onClick={() => history.push('/')}>EDIT</button></div>
            </div>
            {
                Object.keys(props.empForm).map((keyName, index) => (
                    keyName !== 'errors'
                        ? <div key={index}>
                            {keyName}:  {props.empForm[keyName]}
                        </div>
                        : null
                ))
            }
            <div className="employee-info">
                <div><label>Personal Info</label></div>
                <div><button onClick={() => history.push('/personalInfo')}>EDIT</button></div>
            </div>
            <div>
                {
                    Object.keys(props.personalInfo).map((keyName, index) => (
                        keyName !== 'errors'
                            ? <div key={index}>
                                {keyName}:  {props.personalInfo[keyName]}
                            </div>
                            : null
                    ))
                }
            </div>

            <div>
                <button onClick={(event) => handleClick(event)}>
                    SAVE
                </button>
            </div>
            {
                showModal ? <Modal close={() => setShowModal(false)}>{props.apiResponse.message}</Modal> : null
            }
        </React.Fragment>
    );

}

export default withRouter(EmployeeDetails);