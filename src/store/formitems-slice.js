/* Custom Slice for handeling Context in Form Items */
import {createSlice} from "@reduxjs/toolkit";

/* Custom slice for sving and managing form items
* Items will have the following setUp.
*
* { id: 1, type: "text", title: "postnummer", description: "Hva er ditt postnummer?", needed: 1, options: "", rank: 1, validation: "number", error: "Error Message"} */
const formitemsSlice = createSlice({
   name: 'formitems',

   initialState: {
      formItemsAdded: [],
      formText: {
         title: "Awsome Title for Form",
         titleLeft: "About me:",
         info:   [{id:1,type:"Address",text:"Washingtown DC 23, 3440 R\u00f8yken",icon:"pos",action:""},
                  {id:2,type:"Phone",text:"999 99 999","icon":"phone","action":""},
                  {id:3,type:"Email",text:"post@knoph.cc","icon":"email","action":""},
                  {id:4,type:"Social:",text:"7678 898 893","icon":"corpo","action":""},],
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
         if(existingItem) {
            /* State edit is only possible becuase of redux toolkit. */
            state.formItemsAdded = state.formItemsAdded.filter((item) => item.id !== newItem.id)
         }

         /* Adding Item to list */
         state.formItemsAdded.push(newItem)
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
      },

      updateTitle(state, action) {
         /* Get data */
         const {id, title} = action.payload;

         /* Find Item */
         const existingItem = state.formItemsAdded.find(item => item.id === parseInt(id));

         /* Update item */
         existingItem.title = title;
      },

      updateDescription(state, action) {
         /* Get data */
         const {id, description} = action.payload;

         /* Find Item */
         const existingItem = state.formItemsAdded.find(item => item.id === parseInt(id));

         /* Update item */
         existingItem.description = description;
      },

      updateNeeded(state, action) {
         /* Get data */
         const {id, needed} = action.payload;

         /* Find Item */
         const existingItem = state.formItemsAdded.find(item => item.id === parseInt(id));

         /* Update item */
         existingItem.needed = needed;
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
         for(const x in state.formItemsAdded) {
            state.formItemsAdded[x].rank = counter;
            counter++;
         }
      },

      clearForm(state) {
         state.formItemsAdded = [];
         console.log("Form Clear");
      },

      moveUpRank(state, action) {
         /* Rank ID to Move */
         const id = action.payload;

         /* Finding the ID */
         const itemToMove = state.formItemsAdded.find(item => item.id === id);
         const swapRank = (itemToMove.rank - 1);

         /* Checking if Rank is not 1 cant move any more up*/
         if(itemToMove.rank !== 0) {
            const swapID = state.formItemsAdded.find(item => item.rank === swapRank)

            swapID.rank += 1;
            itemToMove.rank -= 1;
         }
      },

      moveDownRank(state, action) {
         /* Rank ID to Move */
         const id = action.payload;

         /* Finding the ID */
         const itemToMove = state.formItemsAdded.find(item => item.id === id);
         const swapRank = (itemToMove.rank + 1);
         const maxRank = (state.formItemsAdded.length - 1);


         /* Checking if Rank is not 1 cant move any more up*/
         if(itemToMove.rank !== maxRank) {
            const swapID = state.formItemsAdded.find(item => item.rank === swapRank)

            swapID.rank -= 1;
            itemToMove.rank += 1;

         }
      },
   }
});

/* Exporting Actions */
export const formitemsAction = formitemsSlice.actions;

/* Exporting Reducer */
export default formitemsSlice.reducer;