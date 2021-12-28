import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from "react-moralis"
import Header from '../components/Header';
import Messages from '../components/Messages';
export default function Home() {

  const { isAuthenticated, logout } = useMoralis();
  if (!isAuthenticated) return <Login />

  return (
    <div className="h-screen bg-gradient-to-b from-white to-pink-700" >
      <Head>
        <title>Meta verse challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-screen-2xl mx-auto" >
        <Header />
        <Messages />
      </div>


      <button onClick={logout}>Log out</button>
    </div>
  )
}
