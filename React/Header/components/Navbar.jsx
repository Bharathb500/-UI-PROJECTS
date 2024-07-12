import { navbar } from "./data"
import Links from "./Link"

function Navbar({menuExpanded}) {
    return (
        <nav className={menuExpanded ? 'navbar expanded' : 'navbar'}>
            {navbar.map((item, index) => <Links key={index} href={item.navlink} text={item.navtext} />)}
        </nav>
    )
}

export default Navbar