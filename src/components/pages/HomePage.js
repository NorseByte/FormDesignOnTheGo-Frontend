import classes from "./HomePage.module.css";
import {Card} from "@material-ui/core";
import {Fragment} from "react";
import AddFormItems from "../ui/createobjects/formitems/AddFormItems";
import EditFormItems from "../ui/createobjects/formitems/EditFormItems";
import InfoItemEdit from "../ui/createobjects/forminfo/InfoItemEdit";

const HomePage = () => {
    return (
        <Fragment>
            <Card className={classes["card-style"]}>
                <div className={classes["info-card"]}>
                    <h2>How to get started?</h2>
                    <p>To easily get started, select an item you require and include it by hitting the button. Once this is achieved, you can adjust the type of validation to be done. What the name is, description and the like. <br />
                        <br /> At that time you could fill in further information that can be displayed on your form. You can then save the form or forward it to a friend. Or test it out on the preview page. But remember everything you create here will be public.</p>
                </div>
            </Card>

            <InfoItemEdit />
            <AddFormItems />
            <EditFormItems />
        </Fragment>
    );
}

export default HomePage;