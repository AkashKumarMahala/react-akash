import React from "react"
import Home from '../../Pages/Home';
import Gallery from '../../Pages/Gallery';
import Login from '../../Pages/Login';
import Signup from "../../Pages/Signup";
import Tensor from '../../Pages/Tensor'

export default [
        {
        path:"/",
        exact:true,
        component: () => <Home/>
    },
    {
        path:"/gallery",
        component: () => <Gallery/>,
        protected: 'Auth'
    },
    {
        path:"/login",
        component: () => <Login/>,
        protected: 'Guest'
    },
    {
        path:"/signup",
        component : () => <Signup/>,
        protected:'Guest'
    },
   
];