import styles from './Footer.module.scss'
import React from "react";
import {InstagramOutlined} from "@ant-design/icons"

export const Footer: React.FC = () => {
    return (
        <footer className={styles.block}>
            <div className={styles.elements}>
                <p className={styles.rights}>© TellMeCoinPrice 2023</p>
                <a href="https://www.instagram.com/philgoodinc/"><InstagramOutlined
                    style={{fontSize: '2em', color: 'floralwhite'}}/></a>
            </div>
        </footer>
    )
};
