import { Outlet } from "react-router-dom"

export default function BlogLayout()  {
    return (
        <div>
            <h3>Blog Sayfası</h3>
            
            <Outlet />
        </div>
    )
}