import {AnyAction, createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

export type CoinType = {
    symbol: null | string,
    price: null | string,
};

type CoinState = {
    coin: CoinType,
    tickers: Array<string>,
    status: null | string,
    error: any,
}

let initialState: CoinState = {
    coin: {
        symbol: null as null | string,
        price: null as null | string
    },
    tickers: ['BTCUSDT', 'ETHUSDT', 'XRPUSDT'],
    status: null,
    error: null,
};

export const getCoinPrice = createAsyncThunk<CoinType, string, { rejectValue: string }>(
    'coins/getCoinPrice',
    async function (ticker, {rejectWithValue}) {

        const response = await fetch(`https://api1.binance.com/api/v3/ticker/price?symbol=${ticker}`);
        if (!response.ok) {
            return rejectWithValue('Server error!');
        }

        return await response.json();
    }
);

const coinPriceSlice = createSlice({
    name: 'coins',
    initialState,
    reducers: {
        getMainPage (state) {
            state.coin.symbol = null;
            state.coin.price = null;
            state.status = null;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCoinPrice.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        });
        builder.addCase(getCoinPrice.fulfilled, (state, action) => {
            state.coin.symbol = action.payload.symbol;
            state.coin.price = action.payload.price;
            state.status = "resolved";
        });
        builder.addCase(getCoinPrice.rejected, (state, action) => {
            state.error = action.payload;
            state.status = 'rejected';
        });
    }
});


export const coinPriceReducer = coinPriceSlice.reducer;
export const { getMainPage} = coinPriceSlice.actions;

