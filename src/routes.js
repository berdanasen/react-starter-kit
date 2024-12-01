import Home from "./pages/Home";
import Contact from "./pages/Contact";
import BlogLayout from "./pages/blog";
import Categories from "./pages/blog/Categories";
import Post from "./pages/blog/Post";
import Blog from "./pages/blog/Blog";
import Blog404 from "./pages/blog/404";
import Page404 from "./pages/404";
import Profile from "./pages/Profile";
import AuthLayout from "./pages/auth/AuthLayout";
import Login from "./pages/auth/Login";
import PrivateRoute from "./components/PrivateRoute";
import HomeLayout from "./pages/HomeLayout";

const routes = [
    {
        path: '/',
        name: 'home',
        element: <HomeLayout />,
        children: [
            {
                index: true,
                name: 'index',
                element: <Home />
            },
            {
                path: 'contact',
                name: 'contact',
                element: <Contact />
            },
            {
                path: 'blog',
                name: 'blog',
                element: <BlogLayout />,
                auth: true,
                children: [
                    {
                        index: true,
                        name: 'index',
                        element: <Blog />
                    },
                    {
                        path: 'categories',
                        name: 'categories',
                        element: <Categories />
                    },
                    {
                        path: 'post/:id/:url',
                        name: 'post',
                        element: <Post />
                    },
                    {
                        path: '*',
                        name: 'notFound',
                        element: <Blog404 />
                    }
                ]
            },
            {
                path: 'profile',
                name: 'profile',
                element: <Profile/>,
                auth: true
            }
        ]
    },
    {
        path: '/auth',
        name: 'auth',
        element: <AuthLayout/>,
        children: [
            {
                path: 'login',
                name: 'login',
                element: <Login />
            }
        ]
    },
    {
        path: '*',
        name: 'notFound',
        element: <Page404/>
    }
]

const authMap = routes => routes.map(route => {
    if (route?.auth) {
        route.element = <PrivateRoute>{route.element}</PrivateRoute>
    }
    if (route?.children) {
        route.children = authMap(route.children)
    }
    return route
})

export default authMap(routes)