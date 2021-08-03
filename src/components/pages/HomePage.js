import classes from "./HomePage.module.css";
import {Card} from "@material-ui/core";
import {Fragment} from "react";
import AddFormItems from "../ui/AddFormItems";
import EditFormItems from "../ui/EditFormItems";

const HomePage = () => {
    return (
        <Fragment>
            <Card className={classes["card-style"]}>
                <div className={classes["info-card"]}>
                    <h2>Hvordan starte?</h2>
                    <p>For enkelt og komme igang, velg et element du ønsker og legge til. Når dette er gjort kan du
                    justere hva slags validering som skal bli gjort. Hva navnet er, beskrivelse og ligenende.<br />
                    <br />Deretter kan du fylle ut ekstra informasjon som kan bli vist på formen din. Du kan
                        dertter lagre formen eller sende den til en venn. Eller teste den ut på preview siden. </p>
                </div>
            </Card>

            <AddFormItems />
            <EditFormItems />
        </Fragment>
    );
}

export default HomePage;