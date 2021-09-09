import { useState } from 'react';
import { extractData } from '../helpers/helper';
import { useDispatch } from 'react-redux';
import { citiesActions } from '../store/cities';

const useCitiesHook = (cityId) =>{
    const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
  	const [cityData, setCityData] = useState({});

  	const fetchCityData = async (cityId) => {
        const apiKey = '6c480d7349d208aa5a734a465745d898';

        setIsLoading(true);
        setError(null);

        try {

            if(!cityId){
                throw new Error('Please select a City!');
            }

            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}`
            );
            
            // console.log(response)

            if (!response.ok) {
                console.log(response)
                throw new Error('Request failed!');
            }

	        const data = await response.json();

            const extractedData = extractData(data);

            dispatch(citiesActions.updateCity({
                'id':cityId,
                'temperature':extractedData.temperature,
                'icon':extractedData.icon
            }))

            setCityData(extractedData);
	    
        } catch (err) {
	      setError(err.message || 'Something went wrong!');
	    }

	    setIsLoading(false);
  	};

	return [cityData,error,isLoading,fetchCityData];
}

export default useCitiesHook;