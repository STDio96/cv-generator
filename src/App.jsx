import React from 'react'
import MainPage from './components/MainPage/MainPage'
import store from './store/index'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import FinalCV from './components/FinalCV/FinalCV'

const App = () => {
  return (
    <Provider store={store}>
      <div className="App container">
        <Router>
          <Switch>
            <Route exact={true} path='/'>
              {/* <MainPage /> */}
            </Route>
            <Route path='/steps/:id'>
              <MainPage />
            </Route>
            <Route path='/cv'>
              <FinalCV />
            </Route>
            <Route path='/'>
              Nothing found :(
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
