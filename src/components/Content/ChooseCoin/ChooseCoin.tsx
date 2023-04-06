import styles from "./ChooseCoin.module.scss";
import {Link} from "react-router-dom";
import React from "react";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {getCoinPrice} from "../../../store/coinPriceSlice";


export const ChooseCoin: React.FC<PropsType> = ({createLogoSrc}) => {
    const tickers = useAppSelector(state => state.coins.tickers);
    const dispatch = useAppDispatch()
    const handleOnCoinClick = (ticker: string) => {
        dispatch(getCoinPrice(ticker))
    };

    return <div className={styles.mainpage_block}>
        <h1>Choose your Coin</h1>
        <div className={styles.choice_block} onClick={(e) => handleOnCoinClick(
            ((e.target as HTMLElement).closest('a') as HTMLElement).innerText)}>
            {tickers.map((t) => {
                return <Link key={t} to={`/${t}`} className={styles.coin}>
                    <img className={styles.currency_logo}
                         src={`https://cryptologos.cc/logos/${createLogoSrc(t)}-logo.svg?v=013`}
                         alt={`${createLogoSrc(t)}logo`}/>
                    <h2>{t}</h2>
                </Link>
            })}</div>
    </div>
};

type PropsType = {
    createLogoSrc: (t: string) => string
};