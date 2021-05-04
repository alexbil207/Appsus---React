const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

import { Home } from './pages/Home.jsx'
import { HeaderApp } from './cmps/HeaderApp.jsx'
import { About } from './pages/About.jsx'
import { NoteApp } from './apps/Note/NoteApp.jsx'
import { MailApp } from './apps/Mail/MailApp.jsx'



export function App() {
    return (
        <Router>
            <header>
                <HeaderApp />
            </header>
            <main className="app">
                <Switch>
                    <Route component={NoteApp} path='/Note' />
                    <Route component={MailApp} path='/Mail' />
                    <Route component={About} path='/About' />
                    <Route component={Home} path='/' />
                </Switch>
            </main>
        </Router>
    )
}


