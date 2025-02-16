import React, { useState, useEffect } from 'react';
import Children from './Children';
import './App.css';

const App = () => {
    const [state, setState] = useState(false);
    const [clickCount, setClickCount] = useState(0);
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const onClickHandler = () => {
        setState((currentState) => !currentState);
    };

    return (
        <div className='App-container'>
            <button onClick={onClickHandler} className='switchBTN'>Родить</button>
            {state && <Children />}
            
            <div className='counter-container'>
                <p>Clicks: {clickCount}</p>
                <button onClick={() => setClickCount(clickCount + 1)} className='counterBTN'>Нажми на меня!</button>
            </div>
            
            <div className='time-container'>
                <p>Нынешнее время: {currentTime}</p>
            </div>
        </div>
    );
};

export default App;

