import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {useState, useCallback, useEffect, Fragment} from "react";
import EmptyPage from "./EmptyPage";
import GenerateForm from "../ui/GenerateForm";
import LoadingSpinner from "../ui/spinner/LoadingSpinner";


const FormPageDetail = () => {
    /* Error Handler state */
    const [fetchError, setFetchError] = useState(null);
    const [formItems, setFormItems] = useState([]);
    const [formInfo, setFormInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    /* Fet API */
    const api = useSelector(state => state.context.apiURL) + "/forms/";

    /* Get acces to parms from url /somethign/:parma1/somethingmore/:parma2 and so on. */
    const params = useParams();

    /* Get form id */
    const {formid} = params;

    /* Post URL */
    const URL = api + formid;

    /* Using Callback to make sure this dosent change, inorder to use effect on page load so we
    * dont get a inifityloop*/
    const fetchPostData = useCallback(async () => {
        /* Using try lots of thing can go wrong here.  */
        try {
            const response = await fetch(URL);
            if(!response.ok) {
                throw new Error("This did not work, following message was given to you: " + response.status.toString())
            }

            /* Load JSON */
            const data = await response.json();

            /* Analysing the data */
            console.log(data);
            if(data === null) {
                throw new Error("Well, this can happen. It seems that the form does not exist. Can you try and change the url or create a new one?");
            }

            if(data.status === "ERROR") {
                throw new Error("Well, this can happen. The form id did not exist. Try creating a new form.");
            }

            /* Data success set new data */
            setFormInfo(data.formInfo);
            setFormItems(data.formItems);

        } catch (error) {
            setFetchError(error.toString());
            setIsLoading(false);
            return [];
        }

        /* Clean up Loading done */
        setIsLoading(false);

    }, [URL]);

    /* Running fetch on load */
    useEffect(() => {
        fetchPostData();
    }, [fetchPostData])

    /* Sorting based on rank formsItems Comes from store. Need slice since it is private orginal */
    const sortedItems = formItems.slice().sort((a, b) => a.rank - b.rank);

    return(
        <Fragment>
            {isLoading && <LoadingSpinner />}
            {fetchError && <EmptyPage path="/create" button="Start fresh and create a new form!" title="Something Went Wrong!"
                        content={fetchError}/>}
            {!fetchError && !isLoading && <GenerateForm formInfo={formInfo} formItems={sortedItems} />}
        </Fragment>
    );
}

export default FormPageDetail;