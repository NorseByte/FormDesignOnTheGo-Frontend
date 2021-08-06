import classes from "./Footer.module.css";
import {useSelector} from "react-redux";
import MenuBottom from "./Menu/MenuBottom"

const Footer = () => {

    /* Get isBig */
    const isBig = useSelector(state => state.context.isBig);

    /* Big Screen Content */
    const bigScreen = (
      <div className={classes['footer-container']}>
          <div className={classes['footer-tekst']}>
              <a className={classes['links-list-a']} href="https://github.com/suxSx/ProFilesFormDesign">GET IT AT GITHUB</a> &ndash; Easy, Simple and Free
          </div>
      </div>
    );

    return(
        <footer className={classes.footer}>
            {isBig && bigScreen}
            {!isBig && <MenuBottom />}
        </footer>
    );
};

export default Footer;