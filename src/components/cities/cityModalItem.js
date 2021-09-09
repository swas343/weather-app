import classes from '../includes/CityModal.module.css';
import { citiesActions } from "../../store/cities";
import loader from '../../assets/loader.gif';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { extractData } from '../../helpers/helper';

const CityModalItem = (props) =>{
    const id = props.id;
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState([])

    const citiesStore = useSelector(state => state.cities.cities[id]);
    
    const selectedCity = (citiesStore) ? classes.selectedCity : ''
    const iconClass = (citiesStore) ? 'fa-check': 'fa-plus'
    
    const icon = (isLoading) ? '' : iconClass;

    async function getItem(){
        setIsLoading(true);
        try{
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=6c480d7349d208aa5a734a465745d898`);
          if(!response.ok){
            throw new Error('Something went wrong');
          }
    
          const data = await response.json();
          const transformedData = extractData(data);

          setData([transformedData])  
        }catch (error) {
          setError(error.message);
        }
        setIsLoading(false);
    }

    const cityHandler = () =>{
        if(citiesStore){
            dispatch(citiesActions.removeCity(id))
        }else{
            getItem()
        }
    }

    useEffect( () =>{
        if(data.length > 0){
            let cityData = data[0]
            // console.log(cityData)
            dispatch(citiesActions.addCity({
                'id':cityData.id,
                'name':cityData.name,
                'temperature':cityData.temperature,
                'icon':cityData.icon
            }))
        }
    },[data,dispatch])

    if(error){
        alert('An error was occured!')
        console.log(error)
    }

    return (
        <li className={selectedCity} id={id} onClick={cityHandler} > 
            {props.name} 
            <i className={`fa ${icon} pull-right`}>
                {isLoading && <img src={loader} alt="loader" style={{'height':'25px'}} />}
            </i>
        </li>
    )
}

export default CityModalItem;