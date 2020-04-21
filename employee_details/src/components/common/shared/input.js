import React from "react";

export const Input = (props) => {

    return (
        <React.Fragment>
            <label>{props.children}</label>
            {
                props.type === "date" 
                    ? <input type={props.type} name={props.name} value={props.value || ""} onChange={(event) => props.handleEvent(event)} />
                    : <input type={props.type} name={props.name} defaultValue={props.value || ""} onKeyUp={(event) => props.handleEvent(event)} />
            }
            {
                props.error ? <div className='danger'>{props.error}</div> : null
            }
        </React.Fragment>
    );

}