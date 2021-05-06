const { NavLink } = ReactRouterDOM;

export function MenuList({ closeMenu }) {
    return (<React.Fragment>
        <NavLink to="/About"><img src="./assets/icons/about.png" onClick={closeMenu} /></NavLink>
        <NavLink to="/Mail"><img src="./assets/icons/mail.png" onClick={closeMenu} /></NavLink>
        <NavLink to="/Note"><img src="./assets/icons/notes.png" onClick={closeMenu} /></NavLink >
        <NavLink to="/Book"><img src="./assets/icons/book.png" onClick={closeMenu} /></NavLink >
    </React.Fragment>
    )
}