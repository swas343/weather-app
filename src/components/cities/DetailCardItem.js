import { Col } from "react-bootstrap";

const DetailCardItem = (props) =>{
    return (
        <Col lg="4" className="text-center">
            <span>{props.value}</span>
            <p>{props.title}</p>
        </Col>
    )
}

export default DetailCardItem;