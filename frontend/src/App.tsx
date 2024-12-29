import React from 'react';
import styled from 'styled-components';
import logo from './wow.jpg';
import './App.css';

const H1 = styled.text`
    font-size: 60px;
    color: hotpink;
    font-weight: bold;
    font-family: Verdana;
`;

const H2 = styled.text`
    font-size: 28px;
    color: black;
    font-family: 'Brush Script MT';
`;

const App = (): React.ReactElement => {
    return (
        <div className="App">
            <header className="App-header">
                <H1>I SPREAD JOY</H1>
                <H2>(in my own way)</H2>
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    );
};

export default App;
