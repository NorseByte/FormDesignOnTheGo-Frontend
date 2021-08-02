import {Fragment} from "react";
import Header from "./Header";
import classes from "./Layout.module.css";

const Layout = (props) => {
    return (
        <Fragment>
            <Header/>
            <div className={classes.body}>
                {props.children}
            </div>
        </Fragment>
    );
}

export default Layout;