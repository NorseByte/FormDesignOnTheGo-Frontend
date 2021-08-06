import classes from './TextInput.module.css';
import WrapperInput from "./WrapperInput";
import {useState, Fragment} from "react";
import {Checkbox} from "@dossier/mithra-ui";

const checkValue = (validation, isEmptyOK, innput) => {
    if(innput !== "") {
        if (validation === "epost") {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(innput).toLowerCase());
        } else if (validation === "number") {
            return /^\d+$/.test(innput);
        } else {
            /* Non of the above then check for empty and number alpha */
            if (innput.trim() !== '') {
                const letterNumber = /^[0-9a-zæøåA-ZÆØÅ.!, ?]+$/;
                return !!innput.match(letterNumber);
            } else {
                return false;
            }
        }
    }

    return isEmptyOK === true;
}

const TextInput = (props) => {
    /* Takes innput as follow:
    * name: name
    * id: uniqeID
    * error: errorMessage
    * label: Merkelapp
    * hint: hint for innput
    * override: if true "" is accepted innput. If we return "" we set --OK-- insted.
    * handler: where to send update data. "" if wrong else real data
    * triggerError: true | null trigger error
    * value: value of innput given from before */

    /* State for handeling innput */
    const [enteredValue, setEnteredValue] = useState("");
    const [enteredThouch, setEnteredThouch] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    /* On rendering check if value is valid */
    const enteredIsValid = checkValue(props.validation, props.override, enteredValue);

    /* On rendering check if innput is valid only if thouch and value is valid
    * !enteredIsValid (false) && enteredThouch (false) = false*/
    const innputIsInvalid =  !enteredIsValid && (props.triggerError || enteredThouch);

    /* Default Values */
    const localID = `${props.id}-${props.name}`;

    /* Update main handler
    * Here is it init and upcomming first time is it set to "" after that the real value
    * Check also if entered value is "" if it is and enteredIsValid set --OK-- */
    const updateValue = enteredIsValid ? enteredValue === "" ? "--OK--" : enteredValue : "";
    props.handler({
        id: props.id,
        name: props.name,
        value: updateValue
    });

    /* Update value on change */
    const InputChangeHandler = (checker, event) => {
        if(checker === true) { setIsDisabled(true) }
        setEnteredValue(event.target.value);
    }

    /* Change Handler Check Box*/
    const inputCheckboxChangeHandler = (event)=> {
        const { checked } = event.target;
        setEnteredValue( checked ? "1" : "0");
    }

    /* Set on thouch true */
    const InputBlurHandler = (event) => {
        setEnteredThouch(true);
    }

    /* Find the right innput type */
    let provider = null;
    if(props.type === "text") {
        /* Set classbased in innputIsInvalid */
        const innputClass = innputIsInvalid ? classes['innput-error'] : classes['innput-ok'];

        provider = <input key={localID} type="text" className={innputClass} name={props.name} id={localID} placeholder={`${props.hint} ${props.options}`} value={props.value} onChange={InputChangeHandler.bind(null, false)} onBlur={InputBlurHandler}/>
    }

    if(props.type === "textarea") {
        /* Set classbased in innputIsInvalid */
        const innputClass = innputIsInvalid ? classes['textarea-error'] : classes['textarea-ok'];

        provider = <textarea key={localID} className={innputClass} cols="30" rows="5" placeholder={`${props.hint} ${props.options}`} value={props.value} onChange={InputChangeHandler.bind(null, false)} onBlur={InputBlurHandler} />;
    }

    if (props.type === "select") {
        /* Set classbased in innputIsInvalid */
        const innputClass = innputIsInvalid ? classes['innput-error'] : classes['innput-ok'];

        const mappedList = props.options.split("|").map((selecter) => (
            <option key={`${localID}_option_${selecter}`} value={selecter}>{selecter}</option>
        ));

        provider = <select key={localID} id={localID} className={innputClass} onChange={InputChangeHandler.bind(null, false)}>{mappedList}</select>;
    }

    if (props.type === "checkbox_checkonce") {
        provider = (
            <Fragment>
                {!isDisabled && <input key={localID} type={props.type} id={localID} placeholder={props.name} value={props.name} onChange={InputChangeHandler.bind(null, true)} />}
                {isDisabled && <input key={localID} type={props.type} id={localID} placeholder={props.name} value={props.name} checked={true} disabled />}
                <label htmlFor={props.name}>{props.hint}</label>
            </Fragment>
        );
    }

    if (props.type === "checkbox") {
        provider = (
            /* TODO: ADD CHECKED IF IT IS NEEDED */
            <Fragment>
                <Checkbox label={props.hint} onChange={inputCheckboxChangeHandler} />
            </Fragment>
        )
    }

    return (
        <WrapperInput key={`${props.id}_wrapper`}>
            {provider}
            {innputIsInvalid && <p className={classes.error}>{props.error}</p>}
        </WrapperInput>
    );
};

export default TextInput;