import {Link} from 'react-router-dom';
import styles from './NotFound.module.scss'
import React from "react";
import {useAppDispatch} from "../../hooks";
import {getMainPage} from "../../store/coinPriceSlice";

const Page404: React.FC = () => {
    const dispatch = useAppDispatch();

    return <div>
        <h2>Oops. This page does not exist.</h2>
        <div className={styles.button_wrapper}>
            <Link onClick={() => dispatch(getMainPage())} className={styles.button} to={'/'}>Back to main page</Link>
        </div>
    </div>
};


export default Page404;