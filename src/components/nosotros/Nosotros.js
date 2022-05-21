import './Nosotros.scss'

export const Nosotros = (props) => { 

    console.log(props)

    const {content} = props


    return (
    <section className="nosotros__title">
        <h2>{props.titulo}</h2>
        <hr/>
        <p>{content}</p>
    </section>
    )
}