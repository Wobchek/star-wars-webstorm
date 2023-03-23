import "./ModalWindow.css";
import React from 'react'

const ModalWindow = (props) => {
    let closeModal = () => props.setActive(false);
    let unCloseFunction = e => e.stopPropagation()
    let activeModal = props.active ? 'modal active' : 'modal'
    let activeModalContent = props.active ? 'modal_content active' : 'modal_content'

    return (
        <div className={activeModal} onClick={closeModal}>
            <div className={activeModalContent} onClick={unCloseFunction}>
                {props.modal}
            </div>
        </div>
    )
}

export default ModalWindow;