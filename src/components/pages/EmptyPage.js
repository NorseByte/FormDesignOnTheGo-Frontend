import classes from "./EmptyPage.module.css";
import {useHistory} from "react-router-dom";
import {LiveHelp} from "@material-ui/icons";

const EmptyPage = (props) => {
    /* Navigator */
    const history = useHistory();

    /* Button Click */
    const onFortsettClick = () => {
        history.push(props.path);
    }

    return (
        <div className={classes.container}>
            <LiveHelp className={classes.icon} style={{fontSize: 90}} />
            <h2>{props.title}</h2>
            <h3>{props.content}</h3>
            <button className={classes.knapp} onClick={onFortsettClick}>{props.button}</button>
        </div>
    );
}

export default EmptyPage;