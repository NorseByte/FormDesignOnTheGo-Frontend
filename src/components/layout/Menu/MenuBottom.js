import classes from "./MenuBottom.module.css";
import {useSelector} from "react-redux";
import clsx from "clsx";
import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles} from "@material-ui/core";
import {useState, Fragment} from "react";
import {NavLink} from "react-router-dom";
import IconHandler from "../../handlers/IconHandler";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

const MenuBottom = () => {
    /* Load Menu Items From store */
    const menuItem = useSelector(state => state.context.menu);
    const footerItem = useSelector(state => state.context.footer);

    /* Style Import for Material UI */
    const classesDrawer = useStyles();

    /* Open close state for drawer, starting point close */
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);

    /* Drawer toggle get default event as well, and we need to know if it is open or close */
    const toggleDrawerHandler = (open) => (event) => {
        /* Return if key press*/
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        /* Set new state if open or close */
        setIsOpenDrawer(open);
    }

    /* Drawer Content Generator */
    const drawerContent = menuItem.map((item) => (
        <NavLink to={item.action} className={classes.link} activeClassName={classes['link-active']}
                 key={`${item.name}-${item.id}-drawer`}>
            <li>
                <ListItem button>
                    <ListItemIcon><IconHandler icon={item.icon}/></ListItemIcon>
                    <ListItemText>{item.name}</ListItemText>
                </ListItem>
                <Divider />
            </li>
        </NavLink>
    ));

    /* Drawer design and output */
    const list = (
        /* Drawer Container */
        <div
            className={clsx(classesDrawer.list, {[classesDrawer.fullList]: false})}
            role='presentation'
            onClick={toggleDrawerHandler(false)}
            onKeyDown={toggleDrawerHandler(false)}
        >
            <List>
                {drawerContent}
            </List>
        </div>
    );

    /* Action Handler Handler for actions if none action return null */
    const actionHandler = (action) => {
        if (action === "drawer") {
            setIsOpenDrawer(true);
        }

        else {
            const myAction = action.split("|");

            /*  */
            if (myAction[0] === "ext") {
                /* Return Call Function */
                window.location = myAction[1];
            }
        }

        return null;
    }

    /* Generating Footer Menu */
    const menuItems = footerItem.map((items) => (
        <div key={items.id} className={classes['menubottom-icon-button']}
             onClick={actionHandler.bind(null, items.action)}>
            <div className={classes['menubottom-icon-button-container']}>
                <IconHandler icon={items.icon}/>
            </div>
            <span className={classes['menubottom-icon-button-label']}>{items.name}</span>
        </div>
    ));

    return (
        <Fragment>
            <Drawer open={isOpenDrawer} onClose={toggleDrawerHandler(false)}>
                {list}
            </Drawer>

            <div className={classes['menubottom-container']}>
                {menuItems}
            </div>
        </Fragment>
    );
}

export default MenuBottom;
