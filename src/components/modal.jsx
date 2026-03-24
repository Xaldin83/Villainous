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

const styles={
    overlay:{
        position:"fixed",
        top:0,
        left:0,
        width:"100vw",
        height:"100vh",
        backgroundColor:'rgba(0,0,0,0.5)',
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        zIndex:1000
    },
    modal:{
        background:"white",
        color:"black",
        padding:"20px",
        borderRadius:"12px",
        minWidth:"300px",
        maxWidth:"90%",
        position:"relative"
    },
    closeBtn:{
        position:"absolute",
        top:"10px",
        right:"10px",
        border:"none",
        background:"transparent",
        fontSize:"18px",
        cursor:"pointer"
    }
}