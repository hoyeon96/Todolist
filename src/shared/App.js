import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import { About } from '../pages';
import TodoPage from '../pages/TodoPage';


class App extends Component {

    

    render() {
        return (
            <div>
                <Route exact path="/" component={ Home }/>
                <Route path="/about" component={ About }/>
                <Switch>
                    <Route path="/TodoPage/:date" component={ TodoPage }/>
                    <Route path="/TodoPage" component={ TodoPage }/>
                </Switch>
            </div>
        );
    }
}

export default App;