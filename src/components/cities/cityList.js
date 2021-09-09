import Wrapper from "../UI/Wrapper";
import CityListItem from "./cityListItem";
import NoCity from "./NoCity";

import { useSelector } from 'react-redux';

const CityList = (props) =>{
    const cities = useSelector(state => state.cities.cities);
    
    let cityList = [];
    if(Object.keys(cities).length === 0){
        cityList.push(<NoCity key="--" />)
    }else{
        for (const key in cities) {
            cityList.push(<CityListItem 
                    key={key} 
                    id={key} 
                    city={cities[key].name}
                    temperature={cities[key].temperature}
                    icon={cities[key].icon}
                    fetchCity={props.fetchCity} 
                />
            )
        }
    }

    return (
        <Wrapper styles={{'overflowY':'scroll','height':'500px'}}>
            <header>
                <p className="m-0">Add City <i className="fa fa-plus pull-right" onClick={props.showModal}></i> </p>
            </header>

            {cityList}
            
        </Wrapper>
    )
}

export default CityList;