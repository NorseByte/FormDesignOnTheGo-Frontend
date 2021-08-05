import classes from './InfoBlock.module.css';

const InfoBlock = (props) => {
    return (
        <div className={classes['info-wrapper']}>
            <h3 className={`${classes['h3']} ${classes.white}`}>{props.title}</h3>
            {props.children}
            <h4 className={classes['h4__info']}>{props.info}</h4>
        </div>
    );
};

export default InfoBlock;