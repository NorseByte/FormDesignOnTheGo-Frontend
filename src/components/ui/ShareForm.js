import classes from "./ShareForm.module.css";
import {Card} from "@material-ui/core";
import TextInput from "./formobjects/TextInput";
import BumpButton from "./buttons/BumpButton";
import {useSelector} from "react-redux";
import {useState} from "react";

const ShareForm = () => {
    /* Url ADDR */
    const [urlAddr, setUrlAddr] = useState("")


    /* Load Form Items */
    const formItems = useSelector(state => state.formitems.formItemsAdded);
    const formInfo = useSelector(state => state.formitems.formText);
    const api = useSelector(state => state.context.apiURL);

    /* Function to handle changes */
    const changeHandler = () => {
        console.log("Something amazing happened");
    }

    /* Pushing data to Firebase */
    const createURL = async () => {
        /* Current Time */
        const timeNow = new Date().toLocaleString();

        /* Creating a JSON OBJECT OF THE Items so far */
        const formObject =  { formItems: formItems, formInfo: formInfo, formTime: timeNow}
        const JSONObject = JSON.stringify({...formObject});
        console.log(JSONObject);

        /* Sending it to firebase */
        try {
            const response = await fetch(api + "/forms", {
               method: 'POST',
               headers: {
                   'Content-Type': 'application/json'
               },
                body: JSONObject,
            });

            /* Get response Data */
            const data = await response.json();

            /* Check if post OK */
            if(data.status === "post-request") {
                /* All ok, message include form id*/
                setUrlAddr(window.location.hostname + "/forms/" + data.message)
            } else {
                /* Something went wrong*/
                setUrlAddr(data.message)
                console.log(data.status + " " + data.message)
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <Card className={classes["card-style"]}>
            <div className={classes["info-card"]}>
                <TextInput
                    id="share-url"
                    name="share-url"
                    type="text"
                    value={urlAddr}
                    hint="PUSH GENERATE TO MAKE A CUSTOM URL FOR YOUR FORM!"
                    error=""
                    options=""
                    validation="empty"
                    override={true}
                    handler={changeHandler}
                />


            </div>

            <BumpButton onClick={createURL}>GENERATE MY CUSTOM URL</BumpButton>
        </Card>
    );
}

export default ShareForm;