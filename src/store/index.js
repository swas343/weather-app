import { configureStore } from '@reduxjs/toolkit';
import citiesSlice from './cities';

const store = configureStore({
	reducer: {
		cities:citiesSlice
	}
})

export default store;