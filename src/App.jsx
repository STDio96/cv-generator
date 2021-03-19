import React from 'react'
import MainPage from './components/MainPage/MainPage'
import store from './store/index'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { useHistory } from 'react-router'
import { Provider } from 'react-redux'
// import FirstStep from './components/FirstStep/FirstStep'
// import { StudyForm } from './components/AdvancedForm/StudyForm'
import FinalCV from './components/FinalCV/FinalCV'

const App = () => {
  // console.log(store)

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
