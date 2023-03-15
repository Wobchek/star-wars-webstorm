import styles from "./Card.module.css";

/*Наполнение карточки (имя, изображение)*/
const Card = (props) => {
    return (
        <div>
            <div className={styles.name}>{props.name}</div>
            <img className={styles.img} src={props.image}/>
        </div>
    )
}

export default Card;