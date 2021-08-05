import classes from './SplitForm.module.css';
import {Card} from "@material-ui/core";

const SplitForm = (props) => {
    return (
        <Card className={classes['splitform-container']}>
            <div className={classes['splitform-container-row']}>
                {/* Product Container */}
                <div className={classes['left-container']}>
                    <div className={classes['left-wrapper']}>
                        {props.leftContainer}
                    </div>
                </div>

                <div className={classes['right-container']}>
                    <div className={classes['right-wrapper']}>
                        {props.rightContainer}
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default SplitForm;