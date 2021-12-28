import { useState } from 'react';
import { useMoralis } from 'react-moralis';

function SendMessage({ endOfMessageRef }) {
    const { user, Moralis } = useMoralis();
    const [message, setMessage] = useState("")

    const sendMessage = (e) => {
        e.preventDefault();

        if (!message) return;
        const Messages = Moralis.Object.extend("Messages");
        const messages = new Messages();

        messages.save({
            message: message,
            username: user.getUsername(),
            ethAddress: user.get("ethAddress")
        }).then(
            (message) => {
                console.log(message);
            },
            (error) => {
                console.log(error.message);
            }
        );

        endOfMessageRef.current.scrollIntoView({ behaviour: "smooth" })
        setMessage("")

    }

    return (
        <form className="flex fixed bottom-0 bg-black opacity-80 w-11/12
        h-12 px-6 py-0 max-w-2xl shadow-xl border-4 border-blue-400 rounded-full">
            <input className="flex-grow outline-none bg-transparent text-white 
            placeholder-gray-500 pr-1"
                type="text"
                value={message}
                placeholder={`Enter a message ${user.getUsername()}`}
                onChange={(e) => setMessage(e.target.value)} />
            <button
                onClick={sendMessage}
                className="text-pink-400 font-bold">Send</button>

        </form>
    )
}

export default SendMessage
