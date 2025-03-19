import Navigation from "./navigation";
import Logo from "./logo";

function Header(){
    return(
        <header className="flex flex-row items-center justify-between">
            <Logo logoSize={42} text={"News"} />
            <Navigation />
        </header>
    )
}

export default Header;