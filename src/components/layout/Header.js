import classes from "./Header.module.css";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Logo from "./../asset/logo.png";
import Menu from "./Menu/Menu"

const Header = () => {

    /* Get is Big from store */
    const isBig = useSelector(state => state.context.isBig);

    return (
        <header className={classes.header}>
            {/* Conatiner div for Header */}
            <div className={`${classes.container} ${!isBig && classes.center}`}>
                <Link to="/"><img src={Logo} alt="Create Your Own Form Design" className={classes['logo-img']}/></Link>


                {/* If Big Screen Create Menu if not it is show in footer. */}
                {isBig && <Menu/>}
            </div>
        </header>
    );
}

export default Header;
