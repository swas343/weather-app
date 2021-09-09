import Wrapper from "../UI/Wrapper";
import FavoriteItem from "./FavoriteItem";
import NoFavorites from "./NoFavorites";

import { useSelector } from "react-redux";

import { getFavorites } from "../../helpers/helper";

const Favorites = (props) =>{
    const favorites = getFavorites(useSelector(state => state.cities.cities));
    let content = [];

    if(Object.keys(favorites).length === 0){
        content.push(<NoFavorites key="f-k" />)
    }else{
        for (const key in favorites) {
            content.push(<FavoriteItem 
                key={`favorite${key}`} 
                title={favorites[key].name} 
                temperature={favorites[key].temperature}
                icon={favorites[key].icon}
                id={key} 
                updateCity={props.updateCity} 
                selectedCity={props.selectedCity}
            />)
        }
    }

    return (
        <Wrapper styles={{'overflowX':'scroll','whiteSpace':'noWrap'}}>
            {content}
        </Wrapper>
        
    )
}

export default Favorites;