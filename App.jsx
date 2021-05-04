const Router = ReactRouterDOM.HashRouter;
const { Route, Switch, Link } = ReactRouterDOM;

import { Home } from './pages/Home.jsx'



export function App() {
    return (
        <Router>
            <header>
                {/* <HeaderApp /> */}
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


