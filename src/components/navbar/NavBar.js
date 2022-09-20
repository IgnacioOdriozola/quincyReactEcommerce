import logo from "../../media/img/logo.jpg"

const NavBar = ()=>{
    return (
        <nav className="navBarHeader">
            <div>
                <img className="brandIcon" src={logo} alt="Dink arts logo"></img>
            </div>
            <div>
                <button className="btn">Categoria 1</button>
                <button className="btn">Categoria 2</button>
                <button className="btn">Categoria 3</button>
                <button className="btn">Categoria 4</button>
            </div>
        </nav>
    )
}

export default NavBar;