import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';

import { citiesActions } from "../../store/cities";
import DetailCardItem from "./DetailCardItem";
import Wrapper from "../UI/Wrapper";

const CityDetails = (props) =>{
    const dispatch = useDispatch();
    const city = useSelector(state => state.cities.cities[props.id]) || null;
    const {
        name,
        high,
        low,
        humidity,
        wind,
        sunrise,
        sunset
    } = props.data;

    const toggleFavoriteHandler = () => {
        dispatch(citiesActions.toggleFavorite(props.id))
    }

    const isFavorite = (city && city.isFavorite) ? 'text-warning' : 'white';

    return (
        <Wrapper>
            {props.header && 
                <header>
                    <p className="m-0">{name} <i className={`fa fa-star cursor-pointer pull-right ${isFavorite}`} onClick={toggleFavoriteHandler}></i></p>
                </header>
            }

            <Row className="mb-3">
                <DetailCardItem value={`${high}°`} title="High"/>
                <DetailCardItem value={`${wind} m/sec`} title="Wind"/>
                <DetailCardItem value={sunrise} title="Sunrise"/>
            </Row>
            <Row>
                <DetailCardItem value={`${low}°`} title="Low"/>
                <DetailCardItem value={`${humidity} %`} title="Humidity"/>
                <DetailCardItem value={sunset} title="Sunset"/>
            </Row>
        </Wrapper>
    )
}

export default CityDetails;