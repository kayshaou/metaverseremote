import { useMoralis } from 'react-moralis'
import Image from 'next/image';
function Avatar({ username, logoutOnPress }) {
    const { user, logout } = useMoralis();

    return (
        <Image
            className="rounded-full bg-black hover:animate-spin"
            src={`https://avatars.dicebear.com/api/pixel-art/${username || user.get("username")}.svg`}
            onClick={() => logoutOnPress && logout()}
            layout="fill"
        />
    )
}

export default Avatar;
