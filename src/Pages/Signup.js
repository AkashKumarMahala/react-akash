import React from 'react'
import {  useFormik } from 'formik'
import * as Yup from 'yup'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useHistory } from 'react-router';

const Signup = () => {
  const history = useHistory();
const formik = useFormik({
  initialValues: {email:'',password:''},
  onSubmit : values => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        history.replace("/")
        const user = userCredential.user;
        console.log(user);
  })
      .catch((error) => {
          console.log(error);
      });
      },

  validationSchema: Yup.object({
    email: Yup.string()
    .required()
    .email(),
    password: Yup.string()
    .required()
    .min(6)
  })
})

    return (
        <section className="flex h-screen">
         <div className="w-1/3 m-auto rounded bg-gradient-to-br from-indigo-900 to-indigo-700 ">
 
              <div className="px-10 py-5 shadow-md">
                <h1 className="mb-3 text-lg font-medium tracking-widest text-center text-white ">Sign Up Here</h1>
               <form onSubmit={formik.handleSubmit}>
                    <div className="mb-3 text-center ">
                     <div className="my-1">
                        <input type="email"  name="email" placeholder="Enter User Id" className="w-full px-2 py-1 mb-2 border border-gray-500 rounded-sm"
                          value={formik.values.email} onChange={formik.handleChange}/>
                    
                           {
                             formik.errors.email ? <div className="text-white">{formik.errors.email}</div> : null
                           }
                     </div>
                      <div>
                        <input type="password" name="password" placeholder="Enter Password" className="w-full px-2 py-1 mb-2 border border-gray-500 rounded-sm"
                           value={formik.values.password} onChange={formik.handleChange}/>
                             {
                               formik.errors.password ? <span className="text-white">{formik.errors.password}</span> : null
                             }
                     </div>
                    </div>
                    <div className="flex w-full mb-2">
                        <button type="submit" className="w-full px-2 py-1 mx-auto text-sm font-medium text-black rounded-sm shadow-md bg-gradient-to-r from-yellow-400 to-yellow-300">
                        <span>Sign Up</span></button>
                    </div>
               </form>
              </div>
                </div>
       
        </section>
    )
}
export default Signup
