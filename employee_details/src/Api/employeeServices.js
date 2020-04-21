// import axios from 'axios';

export const getEmployees = async () => {

    return fetch('http://localhost:3001/getEmployees',
        {
            method: 'get'
        }).then(response => ({ response }))
        .catch(error => ({ error }));
}
export const registerEmployee = async (employeeData) => {

    return fetch('http://localhost:3001/registerEmployee', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(employeeData)
    }).then(response => response )
        .catch(error => error )

}