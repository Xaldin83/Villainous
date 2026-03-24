import { useState } from "react";
import Modal from "./modal";

function Header() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <button onClick={() => setIsOpen(true)}>Ouvrir la modale</button>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} >
                <h2>Jolie petite modale</h2>
                <p>Ma modale</p>
            </Modal>
        </div>
    )
}

export default Header;