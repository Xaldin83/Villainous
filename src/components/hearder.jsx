import './Header.css';
// import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    const handleBurger = () => {
        setToggle(!toggle)
    }
    
    return (
    <>
        <header>
            <article>
                <a href="/"><img src="./img/Logo.webp" alt="Logo du site " /></a>
                <nav className={`navbar ${toggle ? 'active' : ''}`}>
                    <Link to="/disney">Disney</Link>
                    <Link to="/marvel">Marvel</Link>
                    <Link to="/starwars">Star Wars</Link>
                </nav>
                {/* <GiHamburgerMenu id="burgerMenu" onClick={handleBurger}/> */}
            </article>
            
        </header>
    </>
)}


export default Navbar;