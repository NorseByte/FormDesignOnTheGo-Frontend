import classes from "./GenerateForm.module.css";
import {Fragment} from "react";
import SplitForm from "./formobjects/SplitForm";
import WrapperInput from "./formobjects/WrapperInput";
import BumpButton from "./buttons/BumpButton";
import TextInput from "./formobjects/TextInput";
import InfoPara from "./formobjects/InfoPara";
import InfoBlock from "./formobjects/InfoBlock";
import {useState} from "react";
import InfoModal from "../modals/InfoModal";

const GenerateForm = (props) => {
    /* Modal Handler */
    const [showModal, setShowModal] = useState(false);

    /* Standar Values */
    let userInput = [];

    /* Innput Handler - If Innput wron = "", else --OK-- if empty is OK, else value*/
    const inputHandler = (updateObject) => {
        /* Check if Item Exist */
        const existingItem = userInput.find(item => item.id === updateObject.id);

        /* If not Null/Undefined edit else create */
        if (existingItem) {
            if (updateObject.name === "title") {
                existingItem.title = updateObject.value
            }
            if (updateObject.name === "description") {
                existingItem.description = updateObject.value
            }
            if (updateObject.name === "needed") {
                existingItem.needed = updateObject.value
            }
        } else {
            const newItem = {
                id: updateObject.id,
                title: updateObject.name === "title" ? updateObject.value : "",
                description: updateObject.name === "description" ? updateObject.value : "",
                needed: updateObject.name === "needed" ? updateObject.value : "",
            }

            userInput.push(newItem);
        }

        console.log(userInput);
    }

    /* On Submit Handler */
    const onSubmitHandler = (event) => {
        event.preventDefault();
        setShowModal(true);
    }

    /* Mapping Form Items */
    //const sortInputs = props.formItems.sort(((a, b) => a.rank > b.rank));
    const mappedInput = props.formItems.map((item) => {
        console.log("ITEM MAPPING")
        console.log(item)

        if (item.type === "button") {
            return (
                <WrapperInput key={item.id}>
                    <BumpButton onClick={onSubmitHandler}>{item.title}</BumpButton>
                </WrapperInput>
            )
        }

        return <TextInput
                    key={item.id}
                    id={item.id}
                    type={item.type}
                    name={item.title}
                    error={item.error}
                    hint={item.description}
                    handler={inputHandler}
                    validation={item.validation}
                    override={item.needed !== "1"}
                    options={item.options} />
    });

    /* Form innputs*/
    const leftContainer = (
        <Fragment>
            <h3 className={classes['h3']}> {props.formInfo.title} </h3>

            <form className={classes.form}>
                <div className={classes['contact-row']}>
                    {mappedInput}
                </div>
            </form>
        </Fragment>
    );

    /* Mapped Info */
    const mappedInfo = props.formInfo.info.map((info) => (
        <InfoPara key={info.id} id={info.id} icon={info.icon} type={info.type} text={info.text} action={info.action} />
    ));

    /* Info items*/
    const rightContainer = (
        <InfoBlock title={props.formInfo.subtitle} info={""}>
            {mappedInfo}
        </InfoBlock>
    );

    /* On Close Handler */
    const onClose = () => {
        setShowModal(false);
    }

    return (
        <Fragment>
            {showModal && <InfoModal onClose={onClose} title="FORM SENT" message="The Info have been transmittet" footer="" buttonText="Close" />}
            <SplitForm leftContainer={leftContainer} rightContainer={rightContainer}/>
        </Fragment>
    );
}

export default GenerateForm;