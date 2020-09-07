import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Exec from './Components/Exec';
import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/">
                <App />
            </Route>
            <Route path={"/exec"}>
                <div>
                    <Exec />
                </div>
            </Route>
        </Switch>
    </Router>

    , document.getElementById('root'));
registerServiceWorker();
