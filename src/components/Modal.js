import React from 'react'
import ReactDOM from 'react-dom'
import history from '../history'

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div className='ui dimmer modals visible active' onClick={props.onDismiss}>
            <div onClick={(e) => e.stopPropagation()} className='ui standard modal visible active'>
                <div className='header'>{props.title}</div>
                <div className='content'>
                    {props.body}
                </div>
                <div className='actions'>
                    {props.action}
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    )
}

export default Modal
