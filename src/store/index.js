/* Configuration of stores for project */
import { configureStore} from "@reduxjs/toolkit";

/* Import Slices */
import contextSlice from "./context-slice";
import formitemsSlice from "./formitems-slice";

/* Mithra CSS include */
import "@dossier/mithra-ui/dist/ds.css"

/* Setting up store for reducer */
const store = configureStore({
   reducer: {
       context: contextSlice,
       formitems: formitemsSlice,
   }
});

export default store;