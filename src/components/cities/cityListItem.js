import classes from './cityListItem.module.css';
import { useParams } from 'react-router-dom';

const CityListItem = (props) =>{
    const params = useParams();

    const isActive = (params.cityId === props.id) ? 'activeItem' : '';

    const fetchCityHandler = () =>{
        props.fetchCity(props.id)
    }

    return (
        <div className={`${classes.listItem} ${isActive}`} onClick={fetchCityHandler}>
            <p className={props.center}>{props.city}</p>
            <span>{props.temperature}°</span>
        </div>
    )
}

export default CityListItem;