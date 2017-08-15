import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import { AColorHasManyFaces, LighterAndOrDarker, Gradient } from './components/plates';

import 'normalize.css';
import './main.scss';

class ColorInteractionsApp extends Component {
    // HashRouter expects one child
    render() {
        return (
            <HashRouter>
                <div>
                    <Route path="/a-color-has-many-faces" component={AColorHasManyFaces} />
                    <Route path="/lighter-and-or-darker" component={LighterAndOrDarker} />
                    <Route path="/gradient" component={Gradient} />

                    <Route exact path="/" component={Home} />
                </div>
            </HashRouter>
        );
    }
}

export default ColorInteractionsApp;