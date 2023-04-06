import React from "react";
import {Switch, Route, useParams} from 'react-router-dom';
import Page404 from "../404/NotFound";
import {useAppSelector} from "../../hooks";
import styles from './Content.module.scss'
import {Coin} from "./Coin/Coin";
import {ChooseCoin} from "./ChooseCoin/ChooseCoin";


export const Content: React.FC = () => {
    const createLogoSrc = (symbol: string) => {
        switch (symbol) {
            case 'BTCUSDT': {
                return 'bitcoin-btc'
            }
            case 'ETHUSDT': {
                return 'ethereum-eth'
            }
            case 'XRPUSDT': {
                return 'xrp-xrp'
            }
        }
        return ''
    };

    return <div className={styles.content_block}>
        <Switch>
            <Route exact path='/'
                   render={() => <ChooseCoin createLogoSrc={createLogoSrc}/>}/>
            <Route exact path='/404'
                   render={() => <Page404/>}/>
            <Route path='/:tickerUrl'
                   render={() => <Coin createLogoSrc={createLogoSrc}/>}/>
            <Route path='*'
                   render={() => <Page404/>}/>


        </Switch>

    </div>
};