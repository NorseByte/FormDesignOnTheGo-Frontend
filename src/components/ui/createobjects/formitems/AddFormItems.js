import classes from "./AddFormItems.module.css";
import {Card} from "@material-ui/core";
import {useSelector, useDispatch} from "react-redux";
import {formitemsAction} from "../../../../store/formitems-slice";
import BumpButton from "../../buttons/BumpButton";

const AddFormItems = () => {
    /* Get Items to Add */
    const addItems = useSelector(state => state.context.editItems);
    const addedItems = useSelector(state => state.formitems.formItemsAdded)

    /* Setting up Dispatch */
    const dispatch = useDispatch();

    /* On Click Handler for adding items */
    const onClickAddHandler = (what) => {
        /* Find highest number first map out all the id.
        * Then sort it high to low then take the number 0 that will be a number if there are any objects.
        * if not it will be undefined or zero */
        const nextID = addedItems.map(items => items.id).sort((a, b) => b - a)[0];
        const id = nextID + 1;

        /* Next rank same as ID */
        const nextRank = addedItems.map(items => items.rank).sort((a, b) => b - a)[0];
        const rank = nextRank + 1;

        /* What is Object contain all the data from addItems, addItems have default values
        * id: 1, name: "text", describe: "Add a single line text box to your form", hint: "Add TextField", objectHint: "Description of object", label: "Title" */

        /* form item slice expect a object with:
        * { id: 1, type: "text", name: "postnummer", hint: "Hva er ditt postnummer?", needed: 1, options: "", rank: 1, validation: "number" }
        * Since it is a new Item we take the current length of the items and add one so it get put last in the row. */
        const newItem = {
            id: id.toString() === "NaN" ? 0 : id,
            type: what.name,
            title: "",
            description: "",
            needed: 0,
            options: "",
            rank: rank.toString() === "NaN" ? 0 : rank,
            validation: what.validation,
            error: what.error,
        }

        dispatch(formitemsAction.addItem(newItem));
    }

    /* Mapping Items */
    const mappedItems = addItems.map((items) => (
        <div key={items.id} className={classes['button-container']}>
            <BumpButton onClick={onClickAddHandler.bind(this, items)}>{items.hint}</BumpButton>
        </div>
    ));

    const onClearAllClick = () => {
        dispatch(formitemsAction.clearForm());
    }

    return (
        <Card className={`${classes["card-style"]}`}>
            <div className={classes["nav-container"]}>
                {mappedItems}
                <div className={classes['button-container']}>
                    <BumpButton onClick={onClearAllClick} color="red">Clear All</BumpButton>
                </div>
            </div>
        </Card>
    );
}

export default AddFormItems;