import React from 'react';

export function Modal(props) {

    return (
        <React.Fragment>
            <div className="overlay">
                <div className="modal">
                    <div className="modal-text-container">
                        <div className='modal-thankyou'>{props.children}</div>
                        <div className="modal-buttons">
                            <div><button onClick={() => props.close()}>close</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}