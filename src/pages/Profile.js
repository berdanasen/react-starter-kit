import { useAuth } from "../context/PageAuthContext"
import { Link } from "react-router-dom";

export default function Profile()  {

    const { setUser, user } = useAuth()
    const logoutHandle = () => {
        setUser(false)
    }

    return (
        <div>
            Profil sayfası
            {!user && <Link to="/auth/login">Giriş yap</Link>}
            {user && <button onClick={logoutHandle}>Çıkış yap</button>}
        </div>
    )
}