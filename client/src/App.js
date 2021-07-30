import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home, NavBar, Notes, Todos } from "./components";

import './app.css';

function App() {

    return (
        <div className="container">
            <Router>
                <Switch>
                    <Route path='/' exact>
                        <Home />
                    </Route>
                    <Route path='/notes'><
                        Notes />
                    </Route>
                    <Route path='/todos'>
                        <Todos />
                    </Route>
                </Switch>
                <NavBar />
            </Router>
        </div>
        
    )
}

export default App;
