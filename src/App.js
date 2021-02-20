import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/header/Header'
import Main from './components/main/Main'
import About from './components/about/About'
import store from './store'


const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Header/>
                <div className='container'>
                    <Switch>
                        <Route exact path='/' component={Main}/>
                        <Route exact path='/about' component={About}/>
                    </Switch>
                </div>
            </Router>
        </Provider>
    )
}

export default App