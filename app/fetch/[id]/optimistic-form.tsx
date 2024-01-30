'use client'

import { useOptimistic, useRef, useState } from "react";

type Message = {
    message: string;
    sending: boolean;
};

const Thread = ({
    messages,
    sendMessages
}: {
    messages: Message[],
    sendMessages: Function
}) => {
    const formRef = useRef<HTMLFormElement>(null);
    const [ optimisticMessage, addOptimistircMessage ] = useOptimistic(
        messages,
        (state: Message[], newMessage: string) => [
            ...state,
            {
                message: newMessage,
                sending: true
            }
        ]
    );
    
    const formAction = async (formData: FormData) => {
        const msg: string = (formData.get('message') ?? 'unknown') as string;
        addOptimistircMessage(msg);
        formRef.current?.reset();
        await sendMessages(formData);
    };

    return (
        <>
            {optimisticMessage.map((message: Message, index: number) => (
                <div key={index}>
                    { message.message }
                    {!!message.sending && <small style={{color: '#de4040'}}> (전송 중...) </small>}
                </div>
            ))}
            <form action={formAction} ref={formRef} style={{margin: '1rem', padding: '0.5rem 2rem', borderRadius: '1rem', boxShadow: '1px 1px 3px 3px #dddddd'}}>
                <input type="text" name="message" placeholder="Over here!!"/>
                <button type="submit">전송</button>
            </form>
        </>
    );
}

const OptimisticTester = () => {
    const [ messages, setMessages ] = useState<Message[]>([
        { message: 'Start!!', sending: false }
    ]);

    const sendMessages = async (formData: FormData) => {
        const msg: string = (formData.get('message') ?? 'unknown') as string;
        const sentMessage = await deliverMessage(msg);
        setMessages((messages) => [...messages, { message: sentMessage, sending: false }]);
    };

    const deliverMessage = async (message: string) => {
        await new Promise((res) => setTimeout(res, 1500));
        return message;
    }

    return (
        <Thread messages={messages} sendMessages={sendMessages}/>
    );
}

export default OptimisticTester;