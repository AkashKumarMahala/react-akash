import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";
import { useHistory } from 'react-router';
import AppContext from '../store/AppContext';


const Header = () => {

  const history = useHistory()

    const [isLoggedIn,user] = useContext(AppContext)

    const Logout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            history.replace("/login")
            
        }).catch((error) => {
            console.log(error);
        });
        }
    return (
       <nav className="p-5 bg-blue-500">
           <ul className="flex justify-between">
             <span className="flex">
                <li className="mr-3 font-semibold text-white">
                    <NavLink activeClassName="text-blue-200 underline" exact={true} to="/">Home</NavLink>
                </li>
                <li className="mr-3 font-semibold text-white">
                    <NavLink activeClassName="text-blue-200 underline" to="/gallery">Gallery</NavLink>
                </li>
              
             </span>
             <span className="flex">
                   <li className="mr-3 font-semibold text-white">
                   {
                       isLoggedIn ?
                        <button className="font-semibold" onClick={Logout}>Logout</button>
                       : <NavLink activeClassName="text-blue-200 underline" to="/login">Login</NavLink>
                   }
               </li>
               <li className="mr-3 font-semibold text-white">
                   {
                       isLoggedIn ? "" :
                       <NavLink activeClassName="text-blue-200 underline" to="/signup">Signup</NavLink>
                   }
                   
               </li>
             </span>
           </ul>
       </nav>
    )
}

export default Header
