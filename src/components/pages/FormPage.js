import {useSelector} from "react-redux";
import EmptyPage from "./EmptyPage";
import GenerateForm from "./../ui/GenerateForm"

const FormPage = () => {
    /* Import Form Items and check for content */
    const formItems = useSelector(state => state.formitems.formItemsAdded);
    const formInfo = useSelector(state => state.formitems.formText);

    console.log("FORM ITEMS");
    console.log(formItems);

    if(formItems.length === 0) {
        return <EmptyPage path="/create" button="Create a form now!" title="Wow! What happend here?" content="You need to add some form objects before you can view or share your own form!" />
    }

    /* Sorting based on rank formsItems Comes from store. Need slice since it is private orginal */
    const sortedItems = formItems.slice().sort((a, b) => a.rank - b.rank);

    return <GenerateForm formInfo={formInfo} formItems={sortedItems} />;
};

export default FormPage;