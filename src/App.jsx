import React from 'react'
import MainPage from './components/MainPage.jsx/MainPage'
import store from './store/index'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

function App() {
  console.log(store)
  return (
    <Provider store={store}>
      <div className="App container">
        <BrowserRouter>
          <Switch>
            <Route exact={true} path='/'>
              <MainPage />
            </Route>
            <Route path='/photo/:id'>

            </Route>
            <Route path='/album/:id'>

            </Route>
            <Route path='/'>
              Nothing found :(
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
