'use client'

import React from "react";

export default function Popup({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div style={{width: '100vw', height: '100vh', left: 0, top: 0, backgroundColor: '#33333388', display: 'flex', position: 'fixed', zIndex: 10000}}>
            <div style={{width: '25vw', height: '20vh', backgroundColor: 'white', borderRadius: '1rem', alignSelf: 'center', margin: 'auto'}}>
                {children}
            </div>
        </div>
    );
}