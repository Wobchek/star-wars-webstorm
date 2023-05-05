import styles from "./ContentItem.module.css";
import CardContainer from "./Card/CardContainer";

/*Состав карточки (карточка, скрытый текст карточки, модальное окно), внешний вид карточки*/
const ContentItem = (props) => {
    return (
        <div>
            <div className={styles.card}>
                <CardContainer name={props.name} image={props.image} modalInfo={props.modalInfo} id={props.key}/>
            </div>
        </div>

    )
}

export default ContentItem;