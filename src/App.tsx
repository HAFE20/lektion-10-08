import Loop from './components/Loop'
import Lifecycle from './components/Lifecycle'
import './App.css';

function App() {
    return (
        <main className="app">
            <h1> Sidoeffekter och livscykel </h1>
            <h2> useEffect </h2>
            <Loop />
            <Lifecycle />
        </main>
    );
}

export default App;
