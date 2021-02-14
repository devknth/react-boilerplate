# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Steps taken here

### Delete files

Delete unnecessary files:
* src/App.js
* src/App.css
* src/App.test.js
* src/logo.svg

### Add jsconfig.json
```
{
    "compilerOptions": {
        "baseUrl": "src"
    },
    "include": [
        "src"
    ]
}
```

### Install react-route-dom 
```
% yarn add react-router-dom
```

### Install query-string
```
% yarn add query-string
```

### Create folders

Create folders:
* src/components
* src/pages
* src/lib

### Create files

Create default js files

* src/App.js
* src/index.js
* src/components/index.js
* src/components/Menu.js
* src/pages/About.js
* src/pages/Home.js
* src/pages/index.js
* src/pages/Post.js
* src/pages/Posts.js
