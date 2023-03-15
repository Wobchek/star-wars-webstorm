import styles from "./ContentItem.module.css";
import ModalWindow from "./ModalWindow/ModalWindow";
import Card from "./Card/Card";

/*Состав карточки (карточка, скрытый текст карточки, модальное окно), внешний вид карточки*/
const ContentItem = (props) => {
    return (
        <div>
            <div className={styles.card}>
                <Card name={props.name} image={props.image}/>
                <ModalWindow/>
            </div>
        </div>

    )
}

export default ContentItem;