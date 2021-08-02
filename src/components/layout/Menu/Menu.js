import {useSelector} from "react-redux";
import classes from "./Menu.module.css"
import {NavLink} from "react-router-dom";

const Menu = () => {

    /* Load Menu Items From store */
    const menuItem = useSelector(state => state.context.menu);

    /* Mapping Menu Items */
    const headerLinks = menuItem.map((item) => (
       <li key={item.id} className={classes['links-list-li']}>
           <span className={classes['links-list-span']}>
                <NavLink className={classes['links-list-a']} activeClassName={classes['links-list-active']} to={item.action}>{item.name}</NavLink>
           </span>
       </li>
    ));

    return (
        <div className={classes.links}>
            <ul className={classes['links-list']}>
                {headerLinks}
            </ul>
        </div>
    );
}

export default Menu;