import "./ModalWindow.css";
import React from 'react'

const ModalWindow = ({active, setActive}, props) => {
    let closeModal = () => setActive(false);
    let unCloseFunction = e => e.stopPropagation()
    let activeModal = active ? 'modal active' : 'modal'
    let activeModalContent = active ? 'modal_content active' : 'modal_content'
    // let contentPlanets = props.planetsPage.planets.map(p => <ContentItem id={p.id} name={p.name} image={p.img}/>)

    return (
        <div className={activeModal} onClick={closeModal}>
            <div className={activeModalContent} onClick={unCloseFunction}>
                {/*{contentPlanets}*/}
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis delectus nemo omnis qui.
                    Assumenda esse obcaecati perspiciatis placeat. Accusantium ad dolore exercitationem officia, qui
                    totam unde? Aliquam aliquid at beatae cupiditate dolore esse id in natus, non numquam quis
                    repudiandae sapiente, sunt, voluptatem voluptates? Accusamus aspernatur assumenda, at autem
                    commodi eius esse expedita inventore iusto minus praesentium quod quos, ullam unde veniam
                    voluptatibus voluptatum. A aspernatur consequatur, cum cupiditate error esse hic incidunt iusto
                    magni maxime nesciunt nostrum odit officia perferendis quia quis quisquam recusandae sit tempora
                    voluptatum! Accusantium aspernatur ducimus laborum magnam magni odit officiis quos suscipit
                    ullam velit?</p>
            </div>
        </div>
    )
}

export default ModalWindow;