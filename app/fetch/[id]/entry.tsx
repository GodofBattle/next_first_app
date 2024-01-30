'use client'

import { useFormState } from "react-dom";
import { LottoInfo } from "./actions";
import { useRef, useState } from "react";

const Entry = () => {
    const [id, setId] = useState('1');
    const [state, submit] = useFormState(LottoInfo, { info: '' }, id);

    const handleKeyDown = async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if(
            (e.ctrlKey || e.metaKey) &&
            (e.key === 'Enter' || e.key === 'NumpadEnter')
        ) {
            e.preventDefault();
            e.currentTarget.form?.requestSubmit();

            setId(e.currentTarget.value.length.toString());
            submit(id);
        }
    }

    return (
        <div>
            <textarea name="entry" rows={20} cols={100} required onKeyDown={handleKeyDown}/>
            <p>
                {state.info}
            </p>
        </div>
    );
};

export default Entry;