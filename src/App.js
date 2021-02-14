import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, About, Posts } from 'pages'
import { Menu } from 'components'


class App extends Component {
    render() {
        return (
            <Router>
                <>
                    <Menu />
                    <Route exact path="/" component={Home} />
                    <Switch>
                        <Route path="/about/:name" component={About} />
                        <Route path="/about" component={About} />
                    </Switch>
                    <Route path="/posts" component={Posts} />
                </>
            </Router>
        )
    }
}

export default App