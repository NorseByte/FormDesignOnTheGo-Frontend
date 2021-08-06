import classes from "./BumpButton.module.css";
import {useState, useEffect} from "react";
import {Button} from "@dossier/mithra-ui";

const BumpButton = (props) => {
    /* State for controlling if button is highligthet or note for animation with use effect */
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    /* Button Class for bump animation*/
    const buttonClass = btnIsHighlighted ? `${classes.btn} ${classes.bump}` : `${classes.btn} ${props.color ? props.color === "green" ? classes.green : classes.red : classes.regular}`;

    /* Using use Effect to remove highlight class after so it still will
    * be highliteh on a new push. */
    useEffect(() => {
        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [buttonClass])

    const onClickHandler = (event) => {
        setBtnIsHighlighted(true);
        props.onClick(event);
    }

    return (
        <Button className={buttonClass} text={props.children} variant={props.variant ? props.variant : "primary"} intent={props.color ? props.color === "green" ? "positive" : "negative" : ""} onClick={onClickHandler} />
    );
};

export default BumpButton;