import './Header.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {

    const [toggle, setToggle] = useState(false)
    const [toggleMenu, setToggleMenu] = useState(false)

    const handleBurger = () => {
        setToggle(!toggle)
    }

    const handleMenu = () =>{
        setToggleMenu(!toggleMenu)
    }
    
    return (
    <>
        <header>
            <article>
                <a href="/"><img src="../img/Logo.webp" alt="Logo du site " /></a>
                <nav className={`navbar ${toggle ? 'active' : ''}`}>
                    <Link to="/disney">Disney</Link>
                    <Link to="/marvel">Marvel</Link>
                    <Link to="/starwars">Star Wars</Link>
                    <li><a href="#" onClick={handleMenu}>Voirs les boîtes</a>
                        <ul className={`${toggleMenu?'active':''}`}>
                            <li><Link to="/disney/boxs">Disney</Link></li>
                            {/* <li><Link to="/marvel/characters">Marvel</Link></li>
                            <li><Link to="/starwars/characters">Star Wars</Link></li> */}
                        </ul>
                    </li>
                </nav>
                <GiHamburgerMenu id="burgerMenu" onClick={handleBurger}/>
            </article>
            
        </header>
    </>
)}


export default Navbar;