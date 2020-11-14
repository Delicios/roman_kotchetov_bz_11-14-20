import React, { useState } from 'react';
import './App.scss';
import HomePage from './components/pages/HomePage';
    
function App() {
    const [homePage, setHome] = useState('home');

    const setView = page => {
        setHome(true);
    }

    return (
        <div className="App">
            { homePage &&
                <>
                    <h2>Home Page</h2>
                    <HomePage setView={setView} />
                </>
            }
        </div>
    );
}

export default App;
