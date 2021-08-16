import classes from "./ArchiveListItem.module.css";
import BumpButton from "./buttons/BumpButton";
import {Card} from "@material-ui/core";
import {useHistory} from "react-router-dom";

const ArchiveListItem = (props) => {
    const history = useHistory();

    const onClickHandler = (value) => {
        console.log("FormID: " + value);
        history.push("/forms/" + value)
    }

    console.log(props.item)
    let returnValue = [];
    for (const x in props.item) {
        returnValue.push({id: props.item[x]['form_id'], time: props.item[x]['form_time']});
    }

    const generateList = returnValue.map((item) => (
        <div key={item.id} className={classes['button-container']}>
            <BumpButton onClick={onClickHandler.bind(this, item.id)}>{`ID: ${item.id} - Created: ${item.time}`}</BumpButton>
        </div>
    ));

    return (
        <Card className={`${classes["card-style"]}`}>
            <div className={classes["nav-container"]}>
                {generateList}
            </div>
        </Card>
    );
}

export default ArchiveListItem;