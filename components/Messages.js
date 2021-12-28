import { useRef } from 'react'
import { ByMoralis, useMoralis, useMoralisQuery } from 'react-moralis'
import SendMessage from './SendMessage';
import Message from './Message';

const MINS_DURATION = 15;
function Messages() {
    const endOfMessageRef = useRef(null);
    const { user } = useMoralis();

    const { data, loading, error } = useMoralisQuery("Messages",
        (query) => query
            .ascending("createdAt")
            .greaterThan("createdAt",
                new Date(Date.now() - 1000 * 60 * MINS_DURATION))
        , []
        , {
            live: true
        });
    return (
        <div className="pb-56" >
            <div className="my-5" >
                <ByMoralis variant="dark" style={{ marginLeft: "auto", marginRight: "auto" }} />
            </div>
            <div className="mt-5">
                {data.map(message => (<Message key={message.id} message={message} />))}
            </div>
            <div className="flex justify-center">
                <SendMessage endOfMessageRef={endOfMessageRef} />
            </div>
            <div ref={endOfMessageRef} className="text-center text-dark-400" >
                <p>You are up to date {user.getUsername()}! </p>
            </div>
        </div>

    )
}

export default Messages
