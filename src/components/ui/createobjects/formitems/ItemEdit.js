import classes from "./ItemEdit.module.css";
import TextInput from "../../formobjects/TextInput";
import {Card} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {formitemsAction} from "../../../../store/formitems-slice";
import {useState} from "react";
import BumpButton from "../../buttons/BumpButton";
import {Fragment} from "react";

/* Values Recived: item={item} inputHandler={inputHandler} */
const ItemEdit = (props) => {

    /* Trigger error State - Each Innput form get the state. If True Change
    * thouch to true. Then the error will show. If they allready have thouch the
    * schema it ok, since the error loop have been set from the beginning and there
    * all ready is a error. We also show our own error message on the button. */
    const [triggerError, setTriggerError] = useState(false);

    /* Dispatcher for redux */
    const dispatcher = useDispatch();

    /* Standard Values */
    let userInput = {
        title: "",
        description: "",
        needed: 0,
        error: "",
    };

    const inputHandler = (updateObject) => {
        if (updateObject.name === "title") {
            userInput.title = updateObject.value
        }
        if (updateObject.name === "description") {
            userInput.description = updateObject.value
        }
        if (updateObject.name === "needed") {
            userInput.needed = updateObject.value
        }
        if (updateObject.name === "error") {
            userInput.error = updateObject.value
        }
    }

    /* On Click Handler for Submit */
    const saveHandler = (event) => {
        /* Error Field List */
        let ERROR_FIELD = false;

        /* Check for Error */
        if (props.item.type === "button") {
            if (userInput.title === "") {
                ERROR_FIELD = true
            }
        } else {
            for (const x in userInput) {
                if (userInput[x] === "") {
                    ERROR_FIELD = true;
                }
            }
        }

        /* No Error so we reset if there where any */
        setTriggerError(false);

        if (ERROR_FIELD) {
            setTriggerError(true);
            return;
        }

        /* Updating Item in store */
        dispatcher(formitemsAction.updateItem({
            id: props.item.id,
            title: userInput.title,
            description: userInput.description,
            error: userInput.error,
            needed: userInput.needed
        }));
    }

    /* Handler for removing an item */
    const removeHandler = () => {
        dispatcher(formitemsAction.removeItem(props.item.id))
    }

    /* Handler for rank up*/
    const moveUpRank = () => {
        dispatcher(formitemsAction.moveUpRank(props.item.id))
    }

    /* Handler for rank up*/
    const moveDownRank = () => {
        dispatcher(formitemsAction.moveDownRank(props.item.id))
    }

    const contentNotButton = (
        <Fragment>
            <TextInput
                id={`${props.item.id}`}
                type="text"
                name={`description`}
                error="You need to enter a description, only letters and numbers."
                hint={props.item.description !== "" ? props.item.description : `Enter a description for your ${props.item.type}`}
                handler={inputHandler}
                validation="empty"
                override={false}
                options={props.item.options}
                triggerError={triggerError}/>

            <TextInput
                id={`${props.item.id}`}
                type="text"
                name={`error`}
                error="You need to enter a description, only letters and numbers."
                hint={props.item.error !== "" ? props.item.error : `Enter a error message for your ${props.item.type}`}
                handler={inputHandler}
                validation="empty"
                override={false}
                options={props.item.options}
                triggerError={triggerError}/>

            <TextInput
                id={`${props.item.id}`}
                name={`needed`}
                type="checkbox"
                error="You need to enter a title, only letters and numbers."
                hint={`Check the box if the user need to fill out the ${props.item.type}`}
                handler={inputHandler}
                validation="empty"
                override={true}
                checked={props.item.needed}
                options={props.item.options}/>
        </Fragment>
    );

    return (
        <Card className={classes["card-style"]}>
            <div className={classes["title-container"]}>
                <h2>#{props.item.id} - Edit Your {props.item.type}</h2>
                <p>Change the values to something you would like to present for the user. </p>
            </div>

            <TextInput
                id={`${props.item.id}`}
                name={`title`}
                type="text"
                error="You need to enter a title, only letters and numbers."
                hint={props.item.title !== "" ? props.item.title : `Enter Title for your ${props.item.type}`}
                handler={inputHandler}
                validation="empty"
                override={false}
                options={props.item.options}
                triggerError={triggerError}/>

            {props.item.type !== "button" && contentNotButton}

            <div className={classes["button-container"]}>
                <div className={classes['single-button-container']}>
                    <BumpButton onClick={saveHandler} color="green">{`Save new values`}</BumpButton>
                </div>

                <div className={classes['single-button-container']}>
                    <BumpButton onClick={moveUpRank}>{`Move Up`}</BumpButton>
                </div>

                <div className={classes['single-button-container']}>
                    <BumpButton onClick={moveDownRank}>{`Move Down`}</BumpButton>
                </div>

                <div className={classes['single-button-container']}>
                    <BumpButton onClick={removeHandler} color="red">{`Remove ${props.item.type}`}</BumpButton>
                </div>
            </div>
        </Card>
    );
}

export default ItemEdit;