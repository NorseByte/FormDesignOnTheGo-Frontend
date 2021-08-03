import {Fragment} from "react";
import Header from "./Header";
import classes from "./Layout.module.css";
import Footer from "./Footer";

const Layout = (props) => {
    return (
        <Fragment>
            <Header/>
            <div className={classes.body}>
                {props.children}
            </div>
            <Footer />
        </Fragment>
    );
}

export default Layout;