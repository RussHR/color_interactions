import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import CornerMenu from './components/CornerMenu';
import {
    AColorHasManyFaces,
    LighterAndOrDarker,
    FalseGradient,
    Void,
    ReversedGrounds
} from './components/plates';

import 'normalize.css';
import './main.scss';

class ColorInteractionsApp extends Component {
    render() {
        return (
            // HashRouter expects one child
            <HashRouter>
                <div>
                    <Route path="/a-color-has-many-faces" component={AColorHasManyFaces} />
                    <Route path="/lighter-and-or-darker" component={LighterAndOrDarker} />
                    <Route path="/false-gradient" component={FalseGradient} />
                    <Route path="/void" component={Void} />
                    <Route path="/reversed-grounds" component={ReversedGrounds} />

                    <Route exact path="/" component={Home} />
                </div>
            </HashRouter>
        );
    }
}

export default ColorInteractionsApp;