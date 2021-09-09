import classes from './cityListItem.module.css';

const NoCity = (props) =>{
    return (
        <div className={classes.listItem}>
            <p className="text-center">Add City</p>
        </div>
    )
}

export default NoCity;