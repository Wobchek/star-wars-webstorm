import preloader from "../../../assets/images/Preloader/circles.svg";

let Preloader = (props) => {
    return <div style={ { background: 'grey' } }>
        <img src={preloader} />
    </div>
}

export default Preloader;