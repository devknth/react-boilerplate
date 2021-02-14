# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Steps taken here

### Delete files

Delete unnecessary files:
* src/App.js
* src/App.css
* src/App.test.js
* src/logo.svg

### Create folders

Create folders:
* src/components
* src/pages

### Create files

Create default js files

#### App.js
``` 
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home, About, Posts } from 'pages'
import { Menu } from 'components'


class App extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Route exact path="/" component={Home} />
                <Switch>
                    <Route path="/about/:name" component={About} />
                    <Route path="/about" component={About} />
                </Switch>
                <Route path="/posts" component={Posts} />
            </div>
        )
    }
}

export default App
```

#### Root.js
```
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from 'App'

const Root = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)

export default Root
```