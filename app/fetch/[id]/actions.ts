'use server'

import getData from "@/app/lib/lotto";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

const ActionAddForm = (
    prevState: {
        message: string
    },
    formData: FormData
) => {
    const rowFormData = {
        email: formData.get('email'),
        password: formData.get('password')
    };

    const result = JSON.stringify(rowFormData);

    revalidatePath('/');

    return { message: result };
}

const LottoInfo = async (
    prevState: {
        info: string
    },
    id: string
) => {
    const lotto = await getData(id);

    const _info = JSON.stringify(lotto);

    revalidateTag('nextCount');
    redirect('/fetch/401');
    return { info: _info };
}

export {
    ActionAddForm,
    LottoInfo
};