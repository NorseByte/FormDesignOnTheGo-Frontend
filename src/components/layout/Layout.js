import {Fragment} from "react";
import Header from "./Header";

const Layout = (props) => {
    return (
        <Fragment>
            <Header />
            {props.children}
        </Fragment>
    );
}

export default Layout;