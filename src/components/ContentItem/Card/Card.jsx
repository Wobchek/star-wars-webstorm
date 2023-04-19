import styles from "./Card.module.css";
import {useState} from "react";
import ModalWindow from "../ModalWindow/ModalWindow";

/*Наполнение карточки (имя, изображение)*/
const Card = (props) => {
    const [modalActive, setModalActive] = useState(false)
    let openModelBtn = () => {setModalActive(true)}
    return (
        <div className={styles.card}>
            <div className={styles.name}>{props.name}</div>
            <img className={styles.img} src={props.image} alt={'Изображение'} onClick={() => openModelBtn()}/>
            {/*<button onClick={openModelBtn} className={styles.button}>Подробнее</button>*/}
            <ModalWindow active={modalActive} setActive={setModalActive} modalInfo={props.modalInfo}/>
        </div>
    )
}

export default Card;