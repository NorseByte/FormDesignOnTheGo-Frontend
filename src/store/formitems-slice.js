/* Custom Slice for handeling Context in Form Items */
import {createSlice} from "@reduxjs/toolkit";

/* Custom slice for sving and managing form items
* Items will have the following setUp.
*
* { id: 1, type: "text", title: "postnummer", description: "Hva er ditt postnummer?", needed: 1, options: "", rank: 1, validation: "number" } */
const formitemsSlice = createSlice({
   name: 'formitems',

   initialState: {
      formItemsAdded: [],
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
         const {id, title, description, needed} = action.payload;

         /* Find Item */
         const existingItem = state.formItemsAdded.find(item => item.id === parseInt(id));

         /* Update item */
         existingItem.title = title;
         existingItem.description = description;
         existingItem.needed = needed;
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

         /* Updating state with filter */
         state.formItemsAdded = state.formItemsAdded.filter((item) => item.id !== id);
      },

      clearForm(state, action) {
         state.formItemsAdded = [];
      }
   }
});

/* Exporting Actions */
export const formitemsAction = formitemsSlice.actions;

/* Exporting Reducer */
export default formitemsSlice.reducer;