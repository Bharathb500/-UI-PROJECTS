import { navbar } from "./data"
import Link from "./Link"

function Navbar({menuExpanded}) {
    return (
        <nav className={menuExpanded ? 'navbar expanded' : 'navbar'}>
            {navbar.map((item, index) => <Link key={index} href={item.navlink} text={item.navtext} />)}
        </nav>
    )
}

export default Navbar