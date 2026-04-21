import './Header.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from './modal';


const Navbar = () => {

    const [toggle, setToggle] = useState(false)
    const [toggleMenu, setToggleMenu] = useState(false)
    const [helpIsOpen, setHelpIsOpen] = useState(false)
    const [numberPage, setNumberPage] = useState(0)

    const handleBurger = () => {
        setToggle(!toggle)
    }

    const handleMenu = () =>{
        setToggleMenu(!toggleMenu)
    }

    const handleClose =()=>{
        setHelpIsOpen(false)
        setNumberPage(0)
    }
    
    return (
    <>
        <header>
            <article>
                <article>
                    <a href="/"><img src="../img/Logo.webp" alt="Logo du site " /></a>
                    {/* <button id="helpButton" onClick={() => setHelpIsOpen(true)}>?</button> */}
                </article>
                
                <nav className={`navbar ${toggle ? 'active' : ''}`}>
                    <Link to="/disney">Disney</Link>
                    <Link to="/marvel">Marvel</Link>
                    <Link to="/starwars">Star Wars</Link>
                    <li><a href="#" onClick={handleMenu}>Voirs les boîtes</a>
                        <ul className={`${toggleMenu?'active':''}`}>
                            <li><Link to="/disney/boxs">Disney</Link></li>
                            <li><Link to="/marvel/boxs">Marvel</Link></li>
                            <li><Link to="/starwars/boxs">Star Wars</Link></li>
                        </ul>
                    </li>
                </nav>
                <GiHamburgerMenu id="burgerMenu" onClick={handleBurger}/>
            </article>
            
            {/* <Modal isOpen={helpIsOpen} onClose={handleClose}>
                      {
                      <img
                    src={`../img/disney/cart/Gaston.webp`}
                    alt={'Gaston'}
                    style={{width:"100px"}}
                  />
                      }
                    </Modal> */}

        </header>
    </>
)}


export default Navbar;