import ItemEdit from "./ItemEdit";
import {useSelector} from "react-redux";

const EditFormItems = () => {

    /* Setup Form Items Listner */
    const formItemsAdded = useSelector(state => state.formitems.formItemsAdded);

    /* Sorting based on rank formsItems Comes from store. Need slice since it is private orginal */
    const sortedItems = formItemsAdded.slice().sort((a, b) => a.rank - b.rank);

    /* Mapping Edit */
    const mappedItems = sortedItems.map((item) => ( <ItemEdit item={item} key={item.id} /> ));

    return ( mappedItems ? mappedItems : null);
};

export default EditFormItems;