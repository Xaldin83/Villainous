import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({isOpen, onClose, children}) {


    // Fermeture du modal avec la touche "Escape"
    useEffect(()=>{
        const handleEsc = (e) => {
            if(e.key === "Escape"){
                onClose()}}
            if(isOpen){
                window.addEventListener("keydown", handleEsc)
            }
            return () => {
                window.removeEventListener("keydown", handleEsc)
            }
    },[isOpen, onClose])

    // Empêche le scroll de la page lorsque le modal est ouvert
    useEffect(()=>{
        if(isOpen){
            document.body.style.overflow="hidden"
        }else{
        document.body.style.overflow=""}

        return ()=>{
            document.body.style.overflow=""
        }
    },[isOpen])

    if(!isOpen) return null;


    return createPortal(
        <div style={styles.overlay} role="dialog" aria-modal="true" onClick={onClose}>
            <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button style={styles.closeBtn} onClick={onClose}>
                    X
                </button>
                {children}
            </div>
        </div>,
        document.body
    )
   
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    backdropFilter: 'blur(8px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    animation: 'fadeIn 0.3s ease-out',
  },
  modal: {
    background: 'linear-gradient(145deg, #1a1a1a 0%, #2d0b33 100%)',
    border: '3px solid #d4af37', // Votre primary-gold
    borderRadius: '20px',
    padding: '40px',
    position: 'relative',
    maxWidth: '700px', // Un peu plus large pour les boutons enfants
    width: '90%',
    boxShadow: '0 0 50px rgba(0, 0, 0, 1), 0 0 20px rgba(212, 175, 55, 0.3)',
    color: '#e0e0e0',
  },
  closeBtn: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    background: 'none',
    border: '1px solid rgba(212, 175, 55, 0.5)',
    color: '#d4af37',
    fontSize: '1.2rem',
    cursor: 'pointer',
    borderRadius: '50%',
    width: '35px',
    height: '35px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.2s',
    fontWeight: 'bold',
  }
};