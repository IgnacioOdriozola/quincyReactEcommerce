import { Link } from "react-router-dom";
import logo from "../../media/img/logo.jpg"
import CartWidget from "../cartWidget/CartWidget";

const NavBar = ()=>{
    return (
        <nav className="navBarHeader">
            <div>
                <Link to='/'>
                    <img className="brandIcon" src={logo} alt="Ecommerce logo" />
                </Link>
            </div>
            <div className="categories">
                <Link to='/category/1' className="btn">Categoria 1</Link>
                <Link to='/category/2' className="btn">Categoria 2</Link>
                <Link to='/category/3' className="btn">Categoria 3</Link>
                <Link to='/category/4' className="btn">Categoria 4</Link>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;