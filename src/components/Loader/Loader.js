import { Spinner } from "react-bootstrap"
import './loader.scss'

const Loader = () => {

    return (
        <Spinner animation="border" role="status" id="loader">
            <span className="visually-hidden">Cargando...</span>
        </Spinner>
    )
}

export default Loader