import {Fragment} from "react";
import {Card} from "@material-ui/core";
import classes from "./HomePage.module.css";
import ArchiveList from "../ui/ArchiveList";
import {useSelector} from "react-redux";

const ArchivePage = () => {
    const api = useSelector(state => state.context.apiURL) + "/forms";

    return(
        <Fragment>
            <Card className={classes["card-style"]}>
                <div className={classes["info-card"]}>
                    <h2>What people have done before you.</h2>
                    <p>This is a list of all the forms that have been generated before. All the forms created here are public, so you can look back at what people have created before you to get some ides of what to do.</p>
                </div>
            </Card>

            <ArchiveList api={api} />
        </Fragment>
    );
}

export default ArchivePage;