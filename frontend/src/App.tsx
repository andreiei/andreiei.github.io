import React from 'react';
import styles from './App.module.scss';
import logo from './wow.jpg';

const App = (): React.ReactElement => (
    <div className={styles.app}>
        <div className={styles.content}>
            <div className={styles.textWrapper}>
                <div className={styles.h1}>I SPREAD JOY</div>
                <div className={styles.h2}>(in my own way)</div>
            </div>
            <img src={logo} className={styles.logo} alt="logo" />
        </div>
    </div>
);

export default App;
