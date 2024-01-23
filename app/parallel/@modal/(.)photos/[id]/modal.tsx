'use client'

import { useRouter } from "next/navigation"
import { ElementRef, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export function Modal({
    children
}: {
    children: React.ReactNode
}) {
    const router = useRouter();
    const dialogRef = useRef<ElementRef<'dialog'>>(null);
    const root_container = document.getElementById('modal-root');

    useEffect(() => {
        if(!dialogRef.current?.open) {
            dialogRef.current?.showModal();
        }
    }, []);

    function onDismiss() {
        router.back();
    }

    return createPortal(
        <div className="modal-backdrop">
            <dialog ref={dialogRef} className="modal" onClose={onDismiss}>
                { children }
                <button onClick={onDismiss} className="close-button"/>
            </dialog>
        </div>,
        root_container ? root_container : document.body
    );
}