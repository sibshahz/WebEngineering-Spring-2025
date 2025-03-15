import Navigation from "./navigation";
import Logo from "./logo";
import "./header.css"

function Header(){
    return(
        <header>
            <Logo logoSize={42} text={"News"} />
            <Navigation />
        </header>
    )
}

export default Header;