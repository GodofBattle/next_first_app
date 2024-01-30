'use client'

import { useFormStatus } from "react-dom"

const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
        <button type="submit" aria-disabled={pending} style={{ backgroundColor: '#333333', color: '#eeeeee', padding: '0.2rem 0.5rem', borderRadius: '0.3rem' }}>
            Add
        </button>
    )
};

export default SubmitButton;