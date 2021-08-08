import classes from "./EditInfoItemField.module.css";
import {Fragment, useState} from "react";
import TextInput from "../../formobjects/TextInput";
import BumpButton from "../../buttons/BumpButton";
import {useDispatch} from "react-redux";
import {formitemsAction} from "../../../../store/formitems-slice";

const EditInfoItemField = (props) => {
    /* Dispatcher */
    const dispatcher = useDispatch();

    /* Item Destructor */
    const {item} = props;

    /* Error Trigger */
    const [triggerError, setTriggerError] = useState(false);

    let userInput = "";

    /* Innput Handler */
    const inputChangeHandler = (updateObject) => {
        userInput = updateObject.value;
    }

    /* On Click Handler */
    const onClickBumpHandler = () => {
        /* Reset trigger error */
        setTriggerError(false);

        /* Check If empty */
        if (userInput === "") {
            setTriggerError(true);
            return;
        }

        /* All Ok, updating */
        if (item.name === "title") {
            dispatcher(formitemsAction.updateFormTitle(userInput));
        } else if (item.name === "subtitle") {
            dispatcher(formitemsAction.updateFormSubTitle(userInput));
        } else {
            dispatcher(formitemsAction.updateFormInfo({id: item.id, value: userInput}));
        }
        console.log(`Sending ID: ${item.id} and value: ${item.value} with id: ${userInput}`);
    }

    return (
        <Fragment>
            <div className={classes['item-container']}>
                <div className={classes['field-container']}>
                    <TextInput
                        id={item.id}
                        type="text"
                        name={item.name}
                        error={item.error ? item.error : "Only letters and numbers."}
                        hint={item.hint !== "" ? item.hint : `Enter a description for your ${item.name}`}
                        handler={inputChangeHandler}
                        validation={item.type === "Email" ? "epost" : "empty"}
                        override={false}
                        options={""}
                        triggerError={triggerError}/>
                </div>

                <div className={classes['button-container']}>
                    <BumpButton variant="secondary" onClick={onClickBumpHandler}>Save {item.name}</BumpButton>
                </div>
            </div>

        </Fragment>
    );
};

export default EditInfoItemField;