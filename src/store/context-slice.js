/* Custom Slice for handeling Context in Form Design */
import {createSlice} from "@reduxjs/toolkit";

/* Custom Slice for handeling Context changes
*  Using isBig to toogle big screen and small screen for phone and computer
*  Biggest Screen is 1200 after this we change to phone screen
*  We also Provide the API Url here.*/

const contextSlice = createSlice({
    name:'context',

    initialState: {
        previewForm: false,
        isBig: window.innerWidth >= 1200,
        apiURL: "https://form-design-dossier-default-rtdb.firebaseio.com",
        menu: [ {id: 1, name: "Create Form", action: "/create", icon: "create" },
                {id: 2, name: "Preview", action: "/form/", icon: "preview" },
                {id: 3, name: "Share/Save", action: "/share", icon: "save" }, ],
    },

    reducers: {
        setPreviewForm(state, action) {
            /* Setting previewForm to true / false.
            * Including fail safe if it is not a boolean that
            * is provided. We can here set state like this because
            * we use the redux-tool kit. In "regular" redux this is not possible
            * because we should not update the same state. Toolkit here create a "shadow"
            * value like ...state. So we dont update the real thing but looks like it. */
            state.previewForm = !!action.payload;
        },

        setIsBig(state, action) {
            state.isBig = !!action.payload;
        },
    }
});

/* Exporting Actions */
export const contextAction = contextSlice.actions;

/* Exporting Reducer */
export default contextSlice.reducer;