'use client'

import getData from "../lib/lotto";

const MyButtons = ({
    newData
}: {
    newData: Object
}) => {
    const on100 = async () => {
        newData = await getData('100');
    };
    const on200 = async () => {
        newData = await getData('200');
    };

    return (
        <div style={{marginBottom: '1rem'}}>
            <button onClick={on100} style={{borderRadius: '0.3rem', padding: '0.5rem', marginRight: '1rem', backgroundColor: '#aaaaaa'}}>100</button>
            <button onClick={on200} style={{borderRadius: '0.3rem', padding: '0.5rem', marginRight: '1rem', backgroundColor: '#aaaaaa'}}>200</button>
        </div>
    )
}

export default MyButtons;