const { Link } = ReactRouterDOM;

import { MenuList } from '../cmps/MenuList.jsx'
export class HeaderApp extends React.Component {
    state = {
        isMenuShown: false,
    }

    render() {
        const { isMenuShown } = this.state;
        return (
            <React.Fragment>
                <div className="header-container container flex align-center space-between">
                    <div className="logo">
                        <Link to='/'><h1>App/sus</h1></Link>
                    </div>
                    <div className="nav-btn">
                        <img src="../assets/icons/menu.svg" onClick={() => {
                            this.setState({ isMenuShown: !isMenuShown })
                        }} />
                    </div>
                </div>
                <div className={isMenuShown ? 'menu-container grid' : 'menu-container hidden'}>
                    {isMenuShown && <MenuList />}
                </div>
            </React.Fragment>
        )
    }
}