import styles from "./ContentItem.module.css";
import Card from "./Card/Card";

/*Состав карточки (карточка, скрытый текст карточки, модальное окно), внешний вид карточки*/
const ContentItem = (props) => {
    return (
        <div>
            <div className={styles.card}>
                <Card name={props.name} image={props.image} modalInfo={props.modalInfo} id={props.key}/>
            </div>
        </div>

    )
}

export default ContentItem;