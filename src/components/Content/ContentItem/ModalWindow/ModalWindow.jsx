import styles from "./ModalWindow.module.css";
// import React from 'react'

const ModalWindow = (props) => {

    // let modalWindow = React.createRef();
    // let showModelWindow = modalWindow.current.value;

    return (
        <div>
            {/*<button onClick={showModelWindow} className={styles.button}>Подробнее</button>*/}
            <button className={styles.button}>Подробнее</button>
            {/*<div className={styles.modal}>*/}
            {/*    <div ref={modalWindow} className={styles.modal_window}>*/}
            {/*        <h2>Какая-то интересная информация</h2>*/}
            {/*        <p>Lorem ipsum dolor sit amet, consectetur adipisicing*/}
            {/*            elit. Aliquam beatae cum dolor eius inventore*/}
            {/*            ipsa iusto nam nesciunt quia quidem recusandae,*/}
            {/*            repudiandae voluptates.</p>*/}
            {/*        <button className={styles.btnClose}>X</button>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>

    )
}

export default ModalWindow;