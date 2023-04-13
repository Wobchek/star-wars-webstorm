import styles from './PeoplesPage.module.css';
import ContentItem from "../ContentItem/ContentItem";
import peoplesImg from "../../../assets/images/LEGO_Yoda.jpg"; //default people img

/*Отображаемый материал страницы*/
const PeoplesPage = (props) => {

    /*Создание списка страниц*/
    let pageCount = Math.ceil(props.totalPeoplesCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    /*Мапинг исходного массива объектов*/
    let contentPeople = props.peoples.map(p =>
        <ContentItem key={p.id} name={p.name} image={p.img != null ? p.img : peoplesImg} modalInfo={p}/>);
    return (
        <div>
            <div className={styles.pageArea}>
                {pages.map(p =>
                    <span className={props.currentPage === p ? styles.selectedPage : ""}
                          onClick={() => {
                              props.onPageChange(p)
                          }}> {p}
        </span>)}
            </div>
            <div className={styles.content}>
                {contentPeople}
                <button className={styles.btn} onClick={props.addPeople}>Добавить Эвока</button>
            </div>
        </div>
    )
}

export default PeoplesPage;