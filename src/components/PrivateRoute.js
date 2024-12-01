import { useAuth } from "../context/PageAuthContext"
import { Navigate, useLocation } from "react-router-dom"

export default function PrivateRoute({ children }) {
    // kullanıcı oturum açmış mı?
    // eğer oturum açmamışsa yönlendirme işlemi yap
    // eğer oturum açmışsa children'ı return et

    const { user } = useAuth()
    const location = useLocation()
    if(!user) {
        return <Navigate to="/auth/login" replace={true} state={{
            return_url: location.pathname + location.search
        }} />
    }
    return children
}