import styles from "./Card.module.css";
import ModalWindow from "../ModalWindow/ModalWindow";

const Card = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.name}>{props.name}</div>
            <img className={styles.img} src={props.image} alt={'Изображение'} onClick={() => props.openModelBtn()}/>
            <ModalWindow active={props.modalActive} setActive={props.setModalActive} data={props.data}
                         homeworld={props.homeworld} films={props.films}
                         vehicles={props.vehicles} starships={props.starships}/>
        </div>
    )
}

export default Card;