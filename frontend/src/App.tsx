import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import happyAndrei from './happy_andrei.jpg';
import madAndrei from './mad_andrei.jpg';

const App: () => React.ReactElement = (): React.ReactElement => {
    const [showHappy, setShowHappy] = useState<boolean>(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowHappy(prev => !prev);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.app}>
            <div className={styles.content}>
                <div className={styles.textWrapper}>
                    <div className={styles.h1}>I SPREAD JOY</div>
                    <div className={styles.h2}>(in my own way)</div>
                </div>
                <div
                    role="button"
                    onClick={(): void => setShowHappy(!showHappy)}
                    onKeyUp={(): void => setShowHappy(!showHappy)}
                    tabIndex={0}
                    className={styles.logo}
                >
                    <img src={showHappy ? happyAndrei : madAndrei} className={styles.logo} alt="logo" />
                </div>
            </div>
        </div>
    );
};

export default App;
