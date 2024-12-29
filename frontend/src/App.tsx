import React from 'react';
import styles from './App.module.scss';
import img from './wow.jpg';

const App: () => React.ReactElement = (): React.ReactElement => (
    <div className={styles.app}>
        <div className={styles.content}>
            <div className={styles.textWrapper}>
                <div className={styles.h1}>I SPREAD JOY</div>
                <div className={styles.h2}>(in my own way)</div>
            </div>
            <img src={img} className={styles.logo} alt="logo" />
        </div>
    </div>
);

export default App;
