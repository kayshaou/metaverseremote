import { useMoralis } from "react-moralis"

function ChangeUsername() {

    const { setUserData, user, isUserUpdating, userError } = useMoralis();

    const setUsername = () => {
        const username = prompt(`Enter ur new username (current:${user.getUsername()})`);
        if (!username) return;

        setUserData({ username })

    }

    return (
        <div className="text-sm absolute top-0 right-5">
            <button className="hover:text-pink-700"
                onClick={setUsername}>Change username</button>
        </div>
    )
}

export default ChangeUsername
