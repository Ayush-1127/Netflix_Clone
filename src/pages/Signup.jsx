import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'

const Signup = () => {

  const [rememberlogin, setRememberlogin] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const { user, signUp } = UserAuth();
  const navigate = useNavigate();


  const handleFormSubmit = async (e) =>{
    e.preventDefault();
    
    try {
      await signUp(email, password);
      navigate('/');
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='w-full h-screen'>

        <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="///" />

        <div className='bg-black/70 fixed top-0 left-0 w-full h-screen'>
          <div className='fixed w-full px-4 py-24 z-20'>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/80 rounded-lg'>
              <div className='max-w-[320px] mx-auto py-16'>

                <h1 className='text-3xl font-nsans-bold'>Signup</h1>
              </div>

              <form onSubmit={handleFormSubmit} className='w-full flex flex-col py-2'>
                <input
                  className='p-3 mx-11 my-2 bg-gray-700 rounded'
                  type="email"
                  placeholder='email'
                  autoComplete='email'
                  value = {email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  className='p-3 mx-11 my-2 bg-gray-700 rounded'
                  type="password"
                  placeholder='password'
                  autoComplete='current-password'
                  value = {password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button className='bg-red-600 py-3 mx-11 my-6 rounded font-nsans-bold'>Sign Up</button>

                <div className='flex justify-between items-center text-gray-500'>
                  <p>
                    <input 
                    type="checkbox" 
                    className='mx-10 mr-2' 
                    checked = {rememberlogin}
                    onChange={(e) => setRememberlogin(!rememberlogin)}
                    />
                    Remember me
                  </p>
                  <p className='mx-10'>Need Help?</p>
                </div>
                <p className='my-2 mx-10'>
                  <span className='text-gray-500'>Already subscribed to Netflix?
                  </span>
                  <Link className='mx-1' to="/login">Sign In</Link>
                </p>

              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup