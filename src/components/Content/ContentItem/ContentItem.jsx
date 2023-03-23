import styles from "./ContentItem.module.css";
import ModalWindow from "./ModalWindow/ModalWindow";
import Card from "./Card/Card";
import {useState} from "react";

/*Состав карточки (карточка, скрытый текст карточки, модальное окно), внешний вид карточки*/
const ContentItem = (props) => {
    const [modalActive, setModalActive] = useState(false)
    let btnOpenModel = () => {setModalActive(true)}

    return (
        <div>
            <div className={styles.card}>
                <Card name={props.name} image={props.image}/>
                <button onClick={btnOpenModel} className={styles.button}>Подробнее</button>
                <ModalWindow active={modalActive} setActive={setModalActive} state={props.state}/>
            </div>
        </div>

)
}

export default ContentItem;