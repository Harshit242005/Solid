import './App.css'
import { Switch, Match } from 'solid-js/web' // Import Switch and Match
import Home from './Components/Home'
import Update from './Components/Update'
function App() {
  

  return (
    <>
      <Switch>
        <Match when={window.location.pathname === '/'}>
          <Home />
        </Match>
        <Match when={window.location.pathname === '/Update'}>
          <Update />
        </Match>
      </Switch>
    </>
  )
}

export default App
