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
        apiURL: "http://127.0.0.1:8080",
        menu: [ {id: 1, name: "Create Form", action: "/create", icon: "create" },
                {id: 2, name: "Preview", action: "/form/", icon: "preview" },
                {id: 3, name: "Share/Save", action: "/share", icon: "save" },
                {id: 4, name: "Archive", action: "/archive", icon: "files" },],
        footer: [ {id: 1, name: "Menu", action: "drawer", icon: "menu"},
                  {id: 2, name: "GitHub", action: "ext|https://github.com/suxSx/ProFilesFormDesign", icon: "github"},],
        editItems: [    {id: 1, name: "text", describe: "Add a single line text box to your form", hint: "Add Text Field", objectHint: "Description of object", label: "Text Box", validation: "empty", error: ""},
                        {id: 2, name: "textarea", describe: "Add a text area to your form", hint: "Add Text Area", objectHint: "Description of object", label: "TextArea Box", validation: "empty", error: ""},
                        {id: 3, name: "button", describe: "Add a button to your form", hint: "Add Button", objectHint: "Description of object", label: "Button", validation: "button", error: ""},],
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