import { useState } from 'react'
import Loop from './components/Loop'
import Lifecycle from './components/Lifecycle'
import Clock from './components/Clock'
import Ajax from './components/Ajax'
import './App.css';

function App() {
	const [showClock, setShowClock] = useState<boolean>(true)
	const clockVisibleClass = showClock ? '' : 'hidden'
    return (
        <main className="app">
            <h1> Sidoeffekter och livscykel </h1>
            <h2> useEffect </h2>
            <Loop />
            <Lifecycle />
			<button onClick={() => setShowClock(!showClock)}> Toggla klockan </button>
            { showClock ? <Clock /> : null}

			<div className={clockVisibleClass}> <Clock /> </div>
            <Ajax />
        </main>
    );
}

export default App;
