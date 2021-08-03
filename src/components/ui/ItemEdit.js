import classes from "./ItemEdit.module.css";
import TextInput from "./formobjects/TextInput";
import {Card} from "@material-ui/core";

/* Values Recived: item={item} key={item.id} inputHandler={inputHandler} */
const ItemEdit = (props) => {

    console.log(props.item)
    return (
        <Card className={classes["card-style"]}>
            <div className={classes["title-container"]}>
                <h2>Edit Your {props.item.name}</h2>
                <p>Change the values to something you would like to present for the user. </p>
            </div>

            <TextInput
                key={`name_change_${props.item.id}`}
                type="text"
                name={`Enter Title for your ${props.item.name}`}
                id={`name_change_${props.item.id}`}
                error="You need to enter a title, only letters and numbers."
                label={`Enter Title for your ${props.item.name}`}
                hint={`Enter Title for your ${props.item.name}`}
                handler={props.inputHandler}
                validation="empty"
                override={false}
                options={props.item.options}/>

            <TextInput
                key={`description_change_${props.item.id}`}
                type="text"
                name={`Enter Description for your ${props.item.name}`}
                id={`description_change_${props.item.id}`}
                error="You need to enter a title, only letters and numbers."
                label={`Enter Title for your ${props.item.name}`}
                hint={`Enter Title for your ${props.item.name}`}
                handler={props.inputHandler}
                validation="empty"
                override={false}
                options={props.item.options}/>

            <div className={classes["button-container"]}>
                <button className={classes.button} key={`button_${props.item.id}`}
                        onClick={null}>{`Remove ${props.item.name} id: ${props.item.id}`}</button>
            </div>
        </Card>
    );
}

export default ItemEdit;