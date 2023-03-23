import styles from "./Card.module.css";
import ModalWindow from "../ModalWindow/ModalWindow";
import {useState} from "react";

/*Наполнение карточки (имя, изображение)*/
const Card = (props) => {
    const [modalActive, setModalActive] = useState(false)
    let btnOpenModel = () => {setModalActive(true)}
    return (
        <div className={styles.card}>
            <div className={styles.name}>{props.name}</div>
            <img className={styles.img} src={props.image}/>
            <button onClick={btnOpenModel} className={styles.button}>Подробнее</button>
            <ModalWindow active={modalActive} setActive={setModalActive} modal={props.modal}/>
        </div>
    )
}

export default Card;