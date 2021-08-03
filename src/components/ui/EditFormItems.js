import classes from "./EditFormItems.module.css";
import {useSelector} from "react-redux";
import ItemEdit from "./ItemEdit";

const EditFormItems = () => {
    /* Input handler
    * Verdiene her blir satt til "" som init.
    * Er noen verdier fortsatt "" når man prøver og sende inn
    * går det ikke gjennom. Verdiene oppdateres fra innput feltene når riktig får den verdien som blir
    * satt, ved feil blir den satt tilbake til "" */
    let userInput = [];
    const inputHandler = (id, value) => {
        userInput[id] = value;
        console.log(userInput)
    }

    /* Setup Form Items Listner */
    const formItemsAdded = useSelector(state => state.formitems.formItemsAdded);

    /* Mapping Edit */
    const mappedItems = formItemsAdded.map((item) => ( <ItemEdit item={item} key={item.id} inputHandler={inputHandler}/> ));

    return ( mappedItems ? mappedItems : null);
};

export default EditFormItems;