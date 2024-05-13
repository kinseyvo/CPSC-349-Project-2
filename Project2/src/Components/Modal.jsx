import React from "react";
import style from "../styles/modal.module.css";

export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={style.modalOverlay} onClick={onClose}>
            {/* stopPropagation prevents an event from bubbling up the DOM tree */}
            <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className={style.closeButton}>X</button>
                {children}
            </div>
        </div>
    );
}