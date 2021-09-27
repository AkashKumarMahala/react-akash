import React from 'react'
import app from '../config/firebase'
// import {getAuth} from '../config/firebase/auth'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react/cjs/react.development';
import { useHistory } from 'react-router';




const Login = () => {
  
  const [isLoading,setIsLoading] = useState(false)
  const [errorMsg,setErrorMsg] = useState("")
 const [form,setForm] = useState({ email:"",password:""})
 const history = useHistory()

  const handleForm = (e) => {
    setIsLoading(true)
    e.preventDefault();
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, form.email , form.password )
    .then((userCredential) => {
      history.replace("/")
      setIsLoading(false)
      setErrorMsg("")
  })
  .catch((err) => {
    setErrorMsg("Invalid Username or Password !")
    setIsLoading(false)
  });
}

const handleInput = (e) => {
  const value = e.target.value;
  const name = e.target.name;
  setForm({...form,[name]:value})
}


    return (
        <section className="flex h-screen">
         <div className="w-1/3 m-auto rounded bg-gradient-to-br from-indigo-900 to-indigo-700 ">
        {
          errorMsg ?
          <div className="text-center text-white">{errorMsg}</div> : <span>""</span>
        }
              <div className="px-10 py-5 shadow-md">
                <h1 className="mb-3 text-lg font-medium tracking-widest text-center text-white ">Login</h1>
               <form onSubmit={ handleForm }>
                    <div className="mb-3 text-center ">
                     <div className="my-1">
                        <input type="email" id="login" placeholder="Enter User Id" className="w-full px-2 py-1 mb-2 border border-gray-500 rounded-sm"
                          value={form.email} name="email" onChange={handleInput} />
                     </div>
                      <div>
                        <input type="password" id="password" placeholder="Enter Password" className="w-full px-2 py-1 mb-2 border border-gray-500 rounded-sm"
                          value={form.password} name="password" onChange={handleInput} />
                     </div>
                    </div>
                    <div className="flex w-full mb-2">
                        <button type="submit" className="w-full px-2 py-1 mx-auto text-sm font-medium text-black rounded-sm shadow-md bg-gradient-to-r from-yellow-400 to-yellow-300">
                          {
                            isLoading  ?
                            <span><i class="fas fa-circle-notch fa-spin"></i></span> :
                            <span>Login</span>
                          }
                        </button>
                    </div>
               </form>
              </div>
                </div>
       
        </section>
    )
}
export default Login