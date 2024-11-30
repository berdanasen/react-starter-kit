import Header1 from "./Header1"
import Footer from "./Footer"
import {useAuth} from "./context"

export default function Home() {

    const { user } = useAuth()

    return (
        <>
            <Header1/>
            App
            {user && (
                <div style={{padding : 10, border: '1px solid red'}}>
                    Bu alan sadece giriş yapılınca görünür
                </div>
            )}
            <Footer/>
        </>
    )
}