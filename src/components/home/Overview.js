import { Fragment } from "react";
import classes from './Overview.module.css';

const Overview = (props) =>{
    const {temperature,description,icon} = props.data;

    return (
        <Fragment>
            <span className={classes.icon}> 
                <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="cloud" className={classes.icon} /> 
                <span>{temperature}&#176;</span>
                <p className="text-center">{description}</p>
            </span>
        </Fragment>
    )
}

export default Overview;