import React, { useState } from 'react';
import Button from './Button';
import logo from './wow.jpg';
import './App.css';

const App = (): React.ReactElement => {
    const [showText, setShowText] = useState<boolean>(false);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {!showText ? (
                    <Button onClick={(): void => setShowText(true)} title="Click" />
                ) : (
                    <div>&quot;I spread joy (in my own way)&quot;</div>
                )}
            </header>
        </div>
    );
};

export default App;
