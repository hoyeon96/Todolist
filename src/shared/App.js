import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import { About } from '../pages';
import { TodoPage } from '../pages';


class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={ Home }/>
                <Route path="/about" component={ About }/>
                <Route path="/TodoPage" component={ TodoPage }/>
            </div>
        );
    }
}

export default App;