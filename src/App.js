import React, {
    Component
} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import Main from './pages/main';
import TwoComponent from './pages/two-component';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';

import './App.css';

class App extends Component {

    render() {
        return (
            <Router>
                    <React.Fragment>
                        <Navbar />
                        <Sidebar />
                            <div>
                                <Route exact path="/" component={Main}/>
                                <Route exact path="/two" component={TwoComponent}/>
                            </div>
                    </React.Fragment>
                </Router>
        );
    }
}

export default App;
