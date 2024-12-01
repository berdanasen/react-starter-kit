import { useAuth } from "../../context/PageAuthContext"
import { useNavigate, useLocation } from "react-router-dom"

export default function Login() {

    const navigate = useNavigate()
    const location = useLocation()
    const { setUser } = useAuth()

    console.log(location)

    const loginHandle = () => {
        setUser({
            id: 1,
            username: 'berdo'
        })
        navigate(location?.state?.return_url || '/', {
            replace: true,
            state: {
                name: 'berdo'
            }
        })
    }

    return (
        <div>
            Login page
            <button onClick={loginHandle}>Giriş yap</button>
        </div>
    )
}