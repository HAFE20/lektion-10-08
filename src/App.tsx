import Loop from './components/Loop'
import Lifecycle from './components/Lifecycle'
import Clock from './components/Clock'
import Ajax from './components/Ajax'
import './App.css';

function App() {
    return (
        <main className="app">
            <h1> Sidoeffekter och livscykel </h1>
            <h2> useEffect </h2>
            <Loop />
            <Lifecycle />
            <Clock />
            <Ajax />
        </main>
    );
}

export default App;
