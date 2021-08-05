import classes from './InfoPara.module.css';
import IconHandler from "../../handlers/IconHandler";
import {useHistory} from "react-router-dom";

const InfoPara = (props) => {

    const history = useHistory();

    const actionHandler = (action) => {
        if(action) {
            history.push(action);
        }
    }

    return (
        <div key={`info_${props.id}`} className={classes['info-form__box']}>
            <div className={classes['info-form__box__icon']}>
                <IconHandler icon={props.icon}/>
            </div>
            <div className={classes['info-form__box__content']} onClick={actionHandler.bind(null, props.action)}>
                <p className={classes['info-form-box__content_p']}>
                    <span className={classes['info-form__box__title']}>{props.type}:</span> {props.text}
                </p>
            </div>
        </div>
    );
}

export default InfoPara;