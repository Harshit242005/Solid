/* @refresh reload */
import { render } from 'solid-js/web'
import { CancelButtonClickProvider } from './Context/ButtonClickProvider'
import './index.css'
import App from './App'
import Home from './Components/Home'
import Update from './Components/Update'

const root = document.getElementById('root')

const Root = () => {
    return (
        <CancelButtonClickProvider>
            <App />
        </CancelButtonClickProvider>
    )
}

// render(() => <App />, root!)
render(Root, root!)