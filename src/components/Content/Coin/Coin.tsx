import styles from "./Coin.module.scss";
import React, {useEffect} from "react";
import {useParams, useHistory, useRouteMatch} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {getCoinPrice} from "../../../store/coinPriceSlice";

export const Coin: React.FC<PropsType> = ({createLogoSrc}) => {
    const coin = useAppSelector(state => state.coins.coin);
    const status = useAppSelector(state => state.coins.status)
    const dispatch = useAppDispatch();
    let {tickerUrl} = useParams<{ tickerUrl: string }>();

    useEffect(() => {
        if (status !== 'resolved') {
            dispatch(getCoinPrice(tickerUrl));
        }
    }, []);

    return <div>
        <div className={styles.title_block}>
            <div>
                <img className={styles.currency_logo}
                     src={`https://cryptologos.cc/logos/${createLogoSrc(coin.symbol as string)}-logo.svg?v=013`}
                     alt="coinlogo"/>
            </div>
            <div className={styles.currency_name}><h1>{coin.symbol}</h1></div>
        </div>
        <div className={styles.currency_price}>
            <h2>{coin.price}</h2>
        </div>
    </div>
};

type PropsType = {
    createLogoSrc: (t: string) => string
}