import { Row, Col } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom';
import { Fragment, useEffect } from 'react';

import CityList from '../components/cities/cityList';
import CityDetails from '../components/cities/CityDetails';
import Error from '../components/UI/Error';

import useCitiesHook from '../hooks/useCities';
import Loader from '../components/UI/Loader';

const Cities = (props) =>{
    const params = useParams();
    const history = useHistory();
    const [cityData,error,isLoading,fetchCityData] = useCitiesHook();

    const CityHandler = (id) =>{
        history.push('/cities/'+id)
    }

    useEffect( () =>{
        fetchCityData(params.cityId);
    },[params])

    return (
        <Fragment>
            <Row>
                <Col lg="3" className="ms-lg-5 mt-5">
                    <CityList showModal={props.showModal} fetchCity={CityHandler} />
                </Col>
                <Col lg="7" className="ms-5 mt-5">
                    {isLoading && <Loader />}

                    {!isLoading && error && <Error text={error} />}

                    {!isLoading && !error && <CityDetails header={true} id={params.cityId} data={cityData} isLoading={isLoading}/>}
                    
                </Col>
            </Row>
        </Fragment>
    )
}

export default Cities;