import { createSlice } from '@reduxjs/toolkit';
const initCities = JSON.parse(localStorage.getItem('cities')) || {}
const citiesInit = {cities:initCities,isLoading:false}

const citiesSlice = createSlice({
	name:'cities',
	initialState:citiesInit,
	reducers:{
        addCity(state,action){
            const id = action.payload.id
            const name = action.payload.name
			const temp = action.payload.temperature
			const icon = action.payload.icon
            state.cities[id] = {
				'name':name,
				'temperature':temp,
				'icon':icon,
				'isFavorite':false
			};

			// fully aware that i shouldn't be placing it here, reducers must pure
			localStorage.setItem('cities', JSON.stringify(state.cities))
        },
		updateCity(state,action){
			const id = action.payload.id
			const temp = action.payload.temperature
			const icon = action.payload.icon
			if(id in state.cities){
				state.cities[id] = {...state.cities[id], 'temperature':temp,'icon':icon};
				localStorage.setItem('cities', JSON.stringify(state.cities))
			}
		},
		removeCity(state,action){
			delete state.cities[action.payload]
			// yes also here
			localStorage.setItem('cities', JSON.stringify(state.cities))
		},
		toggleFavorite(state,action){
			state.cities[action.payload].isFavorite = !state.cities[action.payload].isFavorite 
			// here as well
			localStorage.setItem('cities', JSON.stringify(state.cities))
		},
        updateLoading(state,action){
            state.isLoading = action.payload
        },
	}
});

export const citiesActions = citiesSlice.actions;

export default citiesSlice.reducer;