import ModalComponent from "../UI/Modal";
import CityModalItem from "../cities/cityModalItem";
import cities from '../../assets/cities/city.list.json';
import classes from './CityModal.module.css';
import { useRef,useState } from "react";

const CityModal = (props) =>{
    const citiesRef = useRef();
    const [citiesArr, setCitiesArr] = useState(cities);

    const filterCities = () =>{
        const value = citiesRef.current.value
        if(value === ''){
            setCitiesArr(cities);
        }else{
            setCitiesArr(cities.filter( (item) => {
                if(item.name.toLowerCase().search(value.toLowerCase()) > -1){
                    return item;
                }
            }))
        }
        
    }

    return (
        <ModalComponent 
          show={props.showModal} 
          onHide={props.hideModalHandler}
          heading="Add new City"
          height="cityModalHeight"
        >
            <div className="searchBar">
                <input ref={citiesRef} className="form-control" type="text" placeholder="Search Here..." onChange={filterCities} />
            </div>
           <ul className={classes.cityItems}>
               {citiesArr.map((item, index) => {
                   return <CityModalItem id={item.id} key={`cmli${index}`} name={item.name} />
               })}
           </ul>
        </ModalComponent>
    )
}

export default CityModal;