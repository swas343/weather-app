import classes from './FavoriteItem.module.css';

const FavoriteItem = (props) =>{
    const isActive = (props.selectedCity === props.id) ? 'activeItem' : '';

    const updateCityHandler = () =>{
        props.updateCity(props.id);
    }

    return (
        <div className={`${classes.item} ${isActive}`} onClick={updateCityHandler}>
            <p>{props.title} <i className="fa fa-star text-warning"></i> </p>
            <p>
                <img src={`http://openweathermap.org/img/w/${props.icon}.png`} alt="weatherlogo" />
                {/* <i className={`fa fa-cloud`}></i> */}
            </p>
            <p>{props.temperature}°</p>
        </div>
    )
}

export default FavoriteItem;