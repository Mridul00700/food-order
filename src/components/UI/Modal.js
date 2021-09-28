import classes from './Modal.module.css';
import ReactDOM from 'react-dom';


const Backdrop = props => {
    return <div className={classes.backdrop}></div>
}


const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}


const Modal = props => {

    //  If not using portals
    // return <>
    //     <Backdrop />
    //     <ModalOverlay>{props.children} </ModalOverlay>
    // </>

    // Using portals-->
    const portalElement = document.getElementById('overlays');

    return <>
        {ReactDOM.createPortal(<Backdrop />, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
}

export default Modal;