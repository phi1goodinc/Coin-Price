import styles from './Header.module.scss';
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useAppSelector, useAppDispatch} from "../../hooks";
import {getCoinPrice, getMainPage} from '../../store/coinPriceSlice'


export let Header: React.FC = () => {
    const tickers = useAppSelector( state => state.coins.tickers);
    const [localTicker, setLocalTicker] = useState(null as null| string);
    const dispatch = useAppDispatch();

    const onMenuTickerClickHandle = (ticker: string) => {
        if (ticker) {
            setLocalTicker(ticker);
            dispatch(getCoinPrice(ticker))
        }
    };

    const onLogoClickHandler = () => {
        setLocalTicker(null);
        dispatch(getMainPage());
    };

    return <header className={styles.header}>
        <Link to={'/'}>
            <img onClick={() => onLogoClickHandler()} className={styles.logo}
                 src="https://cryptologos.cc/logos/lisk-lsk-logo.svg?v=013" alt="logo"/>
        </Link>
        <div className={styles.currency_block} onClick={(e) => onMenuTickerClickHandle(
            (e.target as HTMLButtonElement).innerText)}>
            {tickers.map((t) => {

                return <Link to={`/${t}`} key = {t}
                             className={localTicker === t ? styles.currency_child + " " + styles.selected : styles.currency_child}
                >{t}
                </Link>
            })
            }
        </div>
    </header>
};




