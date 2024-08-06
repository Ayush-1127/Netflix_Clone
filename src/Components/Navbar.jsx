import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'

const Navbar = () => {
    const { user, LogOut } = UserAuth();
    const navigate = useNavigate();

    const handlelogout = async () => {
        try {
            await LogOut();
            navigate('/');
        }
        catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='absolute w-full p-4 flex items-ceter justify-between z-50'>
            <Link to="/">
                <h1 className="uppercase text-red-600 font-nsans-bold cursor-pointer text-5xl">netflix</h1>
            </Link>

            {
                user?.email ? (
                    <div>
                        <Link to="/profile">
                            <button className="capitalize pr-4">Profile</button>
                        </Link>

                        <button
                            onClick={handlelogout}
                            className="capitalize bg-red-600 rounded px-6 py-2 cursor-pointer">
                            Logout
                        </button>

                    </div>
                ) : (
                    <div>
                        <Link to="/login">
                            <button className="capitalize pr-4">login</button>
                        </Link>
                        <Link to="/signup">
                            <button className="capitalize bg-red-600 rounded px-6 py-2 cursor-pointer">sign up</button>
                        </Link>
                    </div>
                )
            }





        </div>
    )
}

export default Navbar