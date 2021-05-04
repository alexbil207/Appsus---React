const { NavLink } = ReactRouterDOM;

export function MenuList() {
    return (<React.Fragment>
        <NavLink to="/About"><img src="../assets/icons/about.png" alt="" /></NavLink>
        <NavLink to="/Mail"><img src="../assets/icons/mail.png" alt="" /></NavLink>
        <NavLink to="/Note"><img src="../assets/icons/notes.png" alt="" /></NavLink >
        <NavLink to="/Book"><img src="../assets/icons/book.png" alt="" /></NavLink >
    </React.Fragment>
    )
}