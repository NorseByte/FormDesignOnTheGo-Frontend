import ItemEdit from "./ItemEdit";
import {useSelector} from "react-redux";

const EditFormItems = () => {

    /* Setup Form Items Listner */
    const formItemsAdded = useSelector(state => state.formitems.formItemsAdded);

    /* Mapping Edit */
    const mappedItems = formItemsAdded.map((item) => ( <ItemEdit key={item.id} item={item} /> ));

    return ( mappedItems ? mappedItems : null);
};

export default EditFormItems;