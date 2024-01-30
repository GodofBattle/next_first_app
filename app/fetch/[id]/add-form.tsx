'use client'

import { useFormState } from "react-dom";
import { ActionAddForm } from "./actions";
import SubmitButton from "./submit-button";

const initialState = {
    message: '',
};

const AddForm = () => {
    const [state, formAction] = useFormState(ActionAddForm, initialState);

    return (
        <form action={formAction} style={{margin: '1rem', padding: '0.5rem 2rem', borderRadius: '1rem', boxShadow: '1px 1px 3px 3px #dddddd'}}>
            <label style={{marginRight: '0.5rem'}}>Email</label>
            <input type={"email"} name="email" required style={{marginRight: '1rem', backgroundColor: '#cccccc'}}/>
            <label style={{marginRight: '0.5rem'}}>Password</label>
            <input type={"password"} name="password" style={{marginRight: '1rem', backgroundColor: '#cccccc'}}/>

            <SubmitButton/>

            <p aria-live="polite" role="status" className={ state?.message.length > 0 ? 'msg' : 'sr-only' } style={{ marginTop: '1rem' }}>
                { state?.message }
            </p>
        </form>
    )
}

export default AddForm;