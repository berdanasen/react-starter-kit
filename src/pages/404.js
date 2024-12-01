import { Link } from "react-router-dom"

export default function Page404() {
    return (
        <div>
            <h1>Sayfa Bulunamadı!</h1>
            <Link to="/">Anasayfaya dön</Link>
        </div>
    )
}