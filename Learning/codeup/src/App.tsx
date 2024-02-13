import './App.css'
// import { Switch, Match } from 'solid-js/web' // Import Switch and Match
import { Router, Route } from 'solid-app-router';
import Home from './Components/Home'
import Update from './Components/Update'
function App() {
  
  return (
    <>
      {/* <Switch>
        <Match when={window.location.pathname === '/'}>
          <Home />
        </Match>
        <Match when={window.location.pathname === '/Update'}>
          <Update />
        </Match>
      </Switch> */}
      <Router>
        <Route path="/" component={Home} />
        <Route path="/Update" component={Update}/>
        </Router>
    </>
  )
}

export default App
