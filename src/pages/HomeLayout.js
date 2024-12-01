import { NavLink, Outlet } from "react-router-dom";
import { url } from "../utils"

export default function HomeLayout() {
    return (
        <>
            <nav>
                <NavLink to={url('home')} className={({ isActive }) => isActive && 'aktif'}>Anasayfa</NavLink>
                <NavLink to={url('home.contact')} style={({ isActive }) => ({
                backgroundColor: isActive ? 'red' : 'transparent' 
                })}>İletişim</NavLink>
                <NavLink to={url('home.blog')}>
                 {({ isActive }) => (
                    <>
                     Blog
                    {isActive && '(Aktif)'}
                    </>
                 )}
                </NavLink>
                <NavLink to={url('home.profile')} style={({ isActive }) => ({
                backgroundColor: isActive ? 'red' : 'transparent' 
                })}>Profil</NavLink>
            </nav>
            <Outlet />
        </>
        
    )
} 