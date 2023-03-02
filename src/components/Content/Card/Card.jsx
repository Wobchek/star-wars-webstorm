import styles from "./Card.module.css";
import earth from "../../../assets/images/Earth.png";


const Card = (props) => {
    return (
        <div className={styles.card} onClick={}>
            планета 1
            <img className={styles.img} src={earth}/>
        </div>
    )
}

export default Card;