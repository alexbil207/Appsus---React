const { Link } = ReactRouterDOM;

import { MenuList } from '../cmps/MenuList.jsx'
import { UserMsg } from '../cmps/UserMsg.jsx'

export class HeaderApp extends React.Component {
    state = {
        isMenuShown: false,
    }
    closeMenu = () => {
        const { isMenuShown } = this.state;
        this.setState({ isMenuShown: !isMenuShown })
    }
    render() {
        const { isMenuShown } = this.state;
        return (
            <React.Fragment>
                <div className="header-container container flex align-center space-between">
                    <div className="logo">
                        <Link to='/'><h1>App/sus</h1></Link>
                    </div>
                    <div><UserMsg /> </div>
                    <div className="nav-btn">
                        <img src="./assets/icons/menu.svg" onClick={this.closeMenu} />
                    </div>
                </div>
                <div className={isMenuShown ? 'menu-container grid' : 'menu-container hidden'}>
                    {isMenuShown && <MenuList closeMenu={this.closeMenu} />}
                </div>
            </React.Fragment>
        )
    }
}