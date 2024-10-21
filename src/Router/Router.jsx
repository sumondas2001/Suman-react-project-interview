import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Page/Home/Home";
import Courses from "../Page/Courses/Courses";
import About from "../Page/About/About";
import Contact from "../Page/Contact/Contact";
import Login from "../Page/Account/Login";
import Admin_Dashboard from "../Admin_Dashboard/Admin_Dashboard";
import General_Setting from "../Admin_Dashboard/General_Setting/General_Setting";
import User_List from "../Admin_Dashboard/User_List/User_List";
import User_Role from "../Admin_Dashboard/User_Role/User_Role";
import Registration from "../Page/Account/Registration";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/course',
                element: <Courses />
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contacts',
                element: <Contact></Contact>
            },
            {
                path : '/login',
                element : <Login />
            },
            {
                path : '/admission',
                element : <Registration />
            }
        ]
    },
    {
        path: 'admin-dashboard',
        element: <Admin_Dashboard />,
        children: [
            {
                path: 'general-setting',
                element: <General_Setting />
            },
            {
                path: 'user-list',
                element: <User_List />
            },
            {
                path: 'user-role',
                element: <User_Role></User_Role>
            }
          
        ]
    }
    
])

export default Router;