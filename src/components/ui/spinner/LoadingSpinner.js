import classes from './LoadingSpinner.module.css';

const loadingSpinner = () => {
    return (
        <div className={classes.content}>
            <div className={classes['lds-roller']}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={classes.subtitle}>Laster...</div>
        </div>
    );
}

export default loadingSpinner;