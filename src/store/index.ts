import {configureStore} from '@reduxjs/toolkit';
import {coinPriceReducer} from './coinPriceSlice'


const store = configureStore({
    reducer: {
        coins: coinPriceReducer,
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch ;