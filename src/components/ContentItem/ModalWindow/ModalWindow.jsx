import "./ModalWindow.css";
import React from 'react'
import InsideModalText from "./InsideModalText/InsideModalText";

const ModalWindow = (props) => {
    let closeModal = () => props.setActive(false);
    let unCloseFunction = e => e.stopPropagation()
    let activeModal = props.active ? 'modal active' : 'modal'
    let activeModalContent = props.active ? 'modal_content active' : 'modal_content'

    return (
        <div className={activeModal} onClick={closeModal}>
            <div className={activeModalContent} onClick={unCloseFunction}>
                <InsideModalText data={props.data}
                                          homeworld={props.homeworld} films={props.films}
                                          vehicles={props.vehicles} starships={props.starships}/>
            </div>
        </div>
    )
}

export default ModalWindow;