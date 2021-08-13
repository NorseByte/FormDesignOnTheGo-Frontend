import {Component} from "react";
import ArchiveListItem from "./ArchiveListItem";
import LoadingSpinner from "./spinner/LoadingSpinner";
import EmptyPage from "../pages/EmptyPage";

/* Archive class created for testing out class objects. */
class ArchiveList extends Component {
    /* Setting States */
    constructor() {
        super();

        /* Remeber in Classes we need to use this speciaal state component. This is not up to us what the name is
        * further it is made of a object. And when we want to set it later on, we need to use the special
        * this.setSate(). That also requrie an object. This functions is not like the other in
        * functinal objects where the state will be overrided and we need to pass ...oldState.
        * Here react work behind the scene to keep the old state, and only edit the one we specify. */
        this.state = {
            fetchError: null,
            isLoading: true,
            data: [],
        }
    }

    /* On Mount Get Forms*/
    async componentDidMount() {
        /* Using try lots of thing can go wrong here.  */
        try {
            /* Set loading true, and fetch error null */
            this.setState({isLoading: true, fetchError: null});


            const response = await fetch(this.props.api);
            if (!response.ok) {
                throw new Error("This did not work, following message was given to you: " + response.status.toString())
            }

            /* Load JSON */
            const data = await response.json();

            /* Analysing the data */
            console.log(data);
            if (data === null) {
                throw new Error("Well, this can happen. It seems that there are now forms in the archive. ");
            }

            /* Clean up Loading done */
            this.setState({isLoading: false, data: data});

        } catch (error) {
            this.setState({fetchError: error.toString(), isLoading: false});
        }
    }

    render() {
        return (
            <>
                    {this.state.isLoading && <LoadingSpinner />}
                    {this.state.fetchError && <EmptyPage path="/create" button="Start fresh and create a new form!" title="Something Went Wrong!"
                                              content={this.state.fetchError}/>}
                    {!this.state.fetchError && !this.state.isLoading && <ArchiveListItem item={this.state.data} />}
            </>
        );
    }
}

export default ArchiveList;