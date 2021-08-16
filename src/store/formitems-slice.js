/* Custom Slice for handeling Context in Form Items */
import {createSlice} from "@reduxjs/toolkit";

/* Import Items from memory */
const localItems = JSON.parse(localStorage.getItem("form"));

/* Const Init Info */
const initInfo = [{id: 1, type: "Address", text: "", icon: "pos", action: "", error: "Enter a valid Adress only letter and number"},
    {id: 2, type: "Phone", text: "", icon: "phone", action: "", error: "Enter a valid Phone only letter and number"},
    {id: 3, type: "Email", text: "", icon: "email", action: "", error: "Enter a valid Email remember the @"},
    {id: 4, type: "Social", text: "",icon: "corpo", action: "", error: "Enter a valid social address only letter and number"},]

/* Custom slice for sving and managing form items
* Items will have the following setUp.
*
* { id: 1, type: "text", title: "postnummer", description: "Hva er ditt postnummer?", needed: 1, options: "", rank: 1, validation: "number", error: "Error Message"} */
const formitemsSlice = createSlice({
    name: 'formitems',

    initialState: {
        formItemsAdded: localItems ? localItems.formItemsAdded : [],
        formText: localItems ? localItems.formText : {
            title: "",
            subtitle: "",
            info: initInfo,
        }
    },

    reducers: {
        addItem(state, action) {
            /* Get new Item */
            const newItem = action.payload;

            /* Check if Item Exist */
            const existingItem = state.formItemsAdded.find(item => item.id === newItem.id);

            /* If existing Item is not found is it undefined/null.
            * We use here filter in order to easy remove the item for then to add it. */
            if (existingItem) {
                /* State edit is only possible becuase of redux toolkit. */
                state.formItemsAdded = state.formItemsAdded.filter((item) => item.id !== newItem.id)
            }

            /* Adding Item to list */
            state.formItemsAdded.push(newItem)

            /* Pushing to local Storage */
            localStorage.setItem("form", JSON.stringify({formItemsAdded: state.formItemsAdded, formText: state.formText}))
        },

        updateItem(state, action) {
            /* Get data */
            const {id, title, description, needed, error} = action.payload;

            /* Find Item */
            const existingItem = state.formItemsAdded.find(item => item.id === parseInt(id));

            /* Update item */
            existingItem.title = title;
            existingItem.description = description;
            existingItem.needed = needed;
            existingItem.error = error;

            /* Pushing to local Storage */
            localStorage.setItem("form", JSON.stringify({formItemsAdded: state.formItemsAdded, formText: state.formText}))
        },

        updateTitle(state, action) {
            /* Get data */
            const {id, title} = action.payload;

            /* Find Item */
            const existingItem = state.formItemsAdded.find(item => item.id === parseInt(id));

            /* Update item */
            existingItem.title = title;

            /* Pushing to local Storage */
            localStorage.setItem("form", JSON.stringify({formItemsAdded: state.formItemsAdded, formText: state.formText}))
        },

        updateDescription(state, action) {
            /* Get data */
            const {id, description} = action.payload;

            /* Find Item */
            const existingItem = state.formItemsAdded.find(item => item.id === parseInt(id));

            /* Update item */
            existingItem.description = description;

            /* Pushing to local Storage */
            localStorage.setItem("form", JSON.stringify({formItemsAdded: state.formItemsAdded, formText: state.formText}))
        },

        updateNeeded(state, action) {
            /* Get data */
            const {id, needed} = action.payload;

            /* Find Item */
            const existingItem = state.formItemsAdded.find(item => item.id === parseInt(id));

            /* Update item */
            existingItem.needed = needed;

            /* Pushing to local Storage */
            localStorage.setItem("form", JSON.stringify({formItemsAdded: state.formItemsAdded, formText: state.formText}))
        },

        removeItem(state, action) {
            /* Getting ID */
            const id = action.payload;
            let counter = 0;

            /* Updating state with filter */
            state.formItemsAdded = state.formItemsAdded.filter((item) => item.id !== id);

            /* Sorting state */
            state.formItemsAdded = state.formItemsAdded.sort((a, b) => a.rank - b.rank);

            /* Renaming */
            for (const x in state.formItemsAdded) {
                state.formItemsAdded[x].rank = counter;
                counter++;
            }

            /* Pushing to local Storage */
            localStorage.setItem("form", JSON.stringify({formItemsAdded: state.formItemsAdded, formText: state.formText}))
        },

        clearForm(state) {
            state.formItemsAdded = [];
            state.formText.info = initInfo;
            state.formText.title = "";
            state.formText.subtitle = "";
            console.log("Form Clear");

            /* Removing Storage */
            localStorage.removeItem("form");
        },

        moveUpRank(state, action) {
            /* Rank ID to Move */
            const id = action.payload;

            /* Finding the ID */
            const itemToMove = state.formItemsAdded.find(item => item.id === id);
            const swapRank = (itemToMove.rank - 1);

            /* Checking if Rank is not 1 cant move any more up*/
            if (itemToMove.rank !== 0) {
                const swapID = state.formItemsAdded.find(item => item.rank === swapRank)

                swapID.rank += 1;
                itemToMove.rank -= 1;
            }

            /* Pushing to local Storage */
            localStorage.setItem("form", JSON.stringify({formItemsAdded: state.formItemsAdded, formText: state.formText}))
        },

        moveDownRank(state, action) {
            /* Rank ID to Move */
            const id = action.payload;

            /* Finding the ID */
            const itemToMove = state.formItemsAdded.find(item => item.id === id);
            const swapRank = (itemToMove.rank + 1);
            const maxRank = (state.formItemsAdded.length - 1);


            /* Checking if Rank is not 1 cant move any more up*/
            if (itemToMove.rank !== maxRank) {
                const swapID = state.formItemsAdded.find(item => item.rank === swapRank)

                swapID.rank -= 1;
                itemToMove.rank += 1;
            }

            /* Pushing to local Storage */
            localStorage.setItem("form", JSON.stringify({formItemsAdded: state.formItemsAdded, formText: state.formText}))
        },

        updateFormInfo(state, action) {
            /* Get value and id */
            const {id, value} = action.payload;

            /* Finding update item */
            const updateItem = state.formText.info.find((item) => item.id === id);

            /* Updating item */
            updateItem.text = value;

            /* Pushing to local Storage */
            localStorage.setItem("form", JSON.stringify({formItemsAdded: state.formItemsAdded, formText: state.formText}))
        },

        updateFormTitle(state, action) {
            state.formText.title = action.payload;

            /* Pushing to local Storage */
            localStorage.setItem("form", JSON.stringify({formItemsAdded: state.formItemsAdded, formText: state.formText}))
        },

        updateFormSubTitle(state, action) {
            state.formText.subtitle = action.payload;

            /* Pushing to local Storage */
            localStorage.setItem("form", JSON.stringify({formItemsAdded: state.formItemsAdded, formText: state.formText}))
        }
    }
});

/* Exporting Actions */
export const formitemsAction = formitemsSlice.actions;

/* Exporting Reducer */
export default formitemsSlice.reducer;