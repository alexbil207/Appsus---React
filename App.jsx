const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

import { Home } from './pages/Home.jsx'
import { HeaderApp } from './cmps/HeaderApp.jsx'



export function App() {
    return (
        <Router>
            <header>
                <HeaderApp />
            </header>
            <main className="app">
                <Switch>
                    <Route component={Home} path='/' />
                </Switch>
            </main>
            <footer>
                {/* <FooterApp /> */}
            </footer>
        </Router>
    )
}


