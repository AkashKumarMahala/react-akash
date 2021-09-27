import { getAuth, onAuthStateChanged } from '@firebase/auth'
import React, { useEffect } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
import routes from  './assets/utils/routes'
import AuthRoute from './assets/utils/routes/AuthRoute'
import GuestRoute from './assets/utils/routes/GuestRoute'
import Header from './components/Header'
import Loading from './components/unsplash/Loading'
import AppContext from './store/AppContext'



const App = () => {
  
  const [isLoggedIn,setIsLoggedIn]= useState(false)
  const [user,setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)
 

      useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          if (user) {
            setIsLoggedIn(true)
            setUser(user)
            setIsLoading(false)
          } else {    
            setIsLoggedIn(false)
            setUser({})
            setIsLoading(false)
        }
        });
    }, [])

    if(isLoading) return <Loading/>
  
    return <Router>
    <AppContext.Provider value={[isLoggedIn,user]} >
      <Header/>
    <Switch>
    {
      routes.map((route,i) => {
        if(route.protected === "Guest"){
          return (
            <GuestRoute path={route.path} key={i} exact={route.exact} component={route.component}/>
          )
        }
        if(route.protected === "Auth"){
          return (
            <AuthRoute path={route.path} key={i} exact={route.exact} component={route.component}/>
          )
        }

        return <Route path={route.path} key={i} exact={route.exact} component={route.component}/>
      })
    }
    </Switch>
    </AppContext.Provider>
  </Router>

  }


export default App



