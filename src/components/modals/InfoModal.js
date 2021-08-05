
import Modal from "./Modal";
import classes from './InfoModal.module.css';
import logo from '../asset/logo.png';
import BumpButton from "../ui/buttons/BumpButton";

const InfoModal = (props) => {
    return (
        <Modal onClose={props.onClose}>
            <div className={classes.container}>
                <img src={logo} alt="Some Information Given to The user" className={classes.image}/>
                <p className={classes['message__title']}>{props.title}</p>
                <p className={classes['message__content']}>{props.message}</p>
                <p className={classes['message__footer']}>{props.footer}</p>
                <div className={classes['button_container']}>
                    <BumpButton onClick={props.onClose}>{props.buttonText}</BumpButton>
                </div>
            </div>
        </Modal>
    );
}

export default InfoModal;