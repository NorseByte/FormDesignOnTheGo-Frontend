import {useSelector} from "react-redux";
import EmptyPage from "./EmptyPage";
import classes from "./HomePage.module.css";
import {Card} from "@material-ui/core";
import {Fragment} from "react";
import ShareForm from "../ui/ShareForm";

const SharePage = () => {
    /* Import Form Items and check for content */
    const formItems = useSelector(state => state.formitems.formItemsAdded);

    if(formItems.length === 0) {
        return <EmptyPage path="/create" button="Create a form now!" title="Can't share without creating!" content="You need to add some form objects before you can view or share your own form!" />
    }



    return(
        <Fragment>
            <Card className={classes["card-style"]}>
                <div className={classes["info-card"]}>
                    <h2>Happy with the result?</h2>
                    <p>What a remarkable time, we live in. Free generated forms for everyone. Your only though now remain how I can share this with my friends?! Go ahead, push the bottom to generate your own unique link so everyone can enjoy your astonishing work!</p>
                </div>
            </Card>

            <ShareForm />
        </Fragment>
    );
}

export default SharePage;