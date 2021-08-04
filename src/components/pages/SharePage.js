import {useSelector} from "react-redux";
import EmptyPage from "./EmptyPage";

const SharePage = () => {
    /* Import Form Items and check for content */
    const formItems = useSelector(state => state.formitems.formItemsAdded);

    if(formItems.length === 0) {
        return <EmptyPage path="/create" button="Create a form now!" title="Wow! What happend here?" content="You need to add some form objects before you can view or share your own form!" />
    }

    return("");
}

export default SharePage;