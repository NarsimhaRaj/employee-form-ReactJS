import React from "react";

export const RadioGroup = (props) => {

    return (
        <React.Fragment>
            <label>{props.children}</label>
            {
                props.radioItems.map(item => <div key={item}>
                    <input type="radio" name={props.name}
                        value={item}
                        checked={props.selectedValue===item} 
                        onChange={(event) => props.handleEvent(event)} />
                    {item}
                </div>)
            }
            {
                props.error ? <div className='danger'>{props.error}</div> : null
            }
        </React.Fragment>
    );

}