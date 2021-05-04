const { NavLink } = ReactRouterDOM;

export function MenuList() {
    return (<React.Fragment>
        <NavLink to="/about"><img src="../assets/icons/about.png" alt="" /></NavLink>
        <NavLink to="/mail"><img src="../assets/icons/mail.png" alt="" /></NavLink>
        <NavLink to="/note"><img src="../assets/icons/notes.png" alt="" /></NavLink >
        <NavLink to="/book"><img src="../assets/icons/book.png" alt="" /></NavLink >
    </React.Fragment>
    )
}