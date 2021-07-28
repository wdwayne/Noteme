import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home, NavBar, Notes } from "./components";

import './app.css';

function App() {
    return (
        <>
            {/* <Home /> */}
            <Notes />
        </>
    )
}

export default App;
