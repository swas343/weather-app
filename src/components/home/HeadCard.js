import { Fragment } from "react";
import { Col } from "react-bootstrap";
import { getCurrentDate } from '../../helpers/helper';

const HeadCard = (props) =>{
    const {name,country} = props.data;
    const currentDate = getCurrentDate();

    return (
        <Fragment>
            <Col className="ms-5" lg="3">
                <h1>{name}, {country}</h1>
                <p className="ps-5">{currentDate}</p>
            </Col>
            
            <Col className="text-end white" lg="8">
                <u className="cursor-pointer" onClick={props.showModal}>Add City</u>
            </Col>
        </Fragment>
    )
}

export default HeadCard;