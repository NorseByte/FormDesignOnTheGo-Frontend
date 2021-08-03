import classes from './WrapperInput.module.css';

const WrapperInput = (props) => {
    return (
        <div className={classes['wrapper-colum']} >
            <div className={classes['wrapper-colum__form']}>
                {props.children}
            </div>
        </div>
    );
};

export default WrapperInput;