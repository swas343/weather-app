import { Row, Col } from "react-bootstrap";
import { Fragment, useState, useEffect } from "react";

import Overview from '../components/home/Overview';
import CityDetails from "../components/cities/CityDetails";
import HeadCard from "../components/home/HeadCard";
import Favorites from "../components/home/Favorites";
import Error from "../components/UI/Error";
import Loader from "../components/UI/Loader";

import useCitiesHook from "../hooks/useCities";

const Home = (props) =>{
    const [cityId, setCityId] = useState(1275339) // default is set to mumbai
    const [cityData,error,isLoading,fetchCityData] = useCitiesHook();

    // const backgroundHandler = () =>{
    //     if('description' in cityData){
    //         props.backgroundHandler(cityData.description)
    //     }
    // }

    useEffect( () =>{
        fetchCityData(cityId)
        // backgroundHandler()
    },[cityId])

    return (
        <Fragment>
            {isLoading && <Loader height="50vh" />}

            {!isLoading && error && <Error text={error} />}

            {!isLoading && !error && <div>
                <Row className="mt-5 ms-5">
                    <HeadCard 
                        showModal={props.showModal} 
                        data={cityData}
                    />
                </Row>
                <Row>
                    <Col lg="6" className="text-center">
                        <Overview 
                            data={cityData}
                        />
                    </Col>
                    <Col lg="6">
                        <CityDetails 
                            data={cityData}
                        s/>
                    </Col>
                </Row>
            </div>
            }
            <Row className="mt-5">
                <Col lg="12" className="mt-5">
                    <Favorites selectedCity={cityId} updateCity={setCityId} />
                </Col>
            </Row>
        </Fragment>        
    )
}

export default Home;