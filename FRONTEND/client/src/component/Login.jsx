import React, { useState } from 'react'
import { UseAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Spinner from './Spinner';

const Login = () => {
    const [state, setState] = useState("login");
     const {showUserlogin,setShowUserLogin,setUser ,axios} = UseAppContext();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [loading,setLoading] = useState(false)

    const loginHandle = async (e)=>{
       try {
        e.preventDefault();
        setLoading(true)
        const {data} = await axios.post(`/api/user/${state}`,{
            name,email,password
        })
        if(data.success){
            toast.success(data.message);
            setShowUserLogin(false);
            navigate('/');
            setUser(data.user);
        }

        
       } catch (error) {
        console.log(error)
        toast.error(error.response.data.message)
       }finally{( setLoading(false))}
      
        

    }

    return (
         <div onClick={()=>setShowUserLogin(false)} className='flex fixed top-0 left-0 right-0 bottom-0 z-30 bg-black/50 items-center' >
        <form onClick={(e)=>e.stopPropagation()} className=" flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white ">
            <p className="text-2xl font-medium m-auto">
                <span className="text-[#59a835]">User</span> {state === "login" ? "Login" : "Sign Up"}
            </p>
            {state === "register" && (
                <div className="w-full">
                    <p>Name</p>
                    <input onChange={(e) => setName(e.target.value)} value={name} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-[#59a835]" type="text" required />
                </div>
            )}
            <div className="w-full ">
                <p>Email</p>
                <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-[#59a835]" type="email" required />
            </div>
            <div className="w-full ">
                <p>Password</p>
                <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-[#59a835]" type="password" required />
            </div>
            {state === "register" ? (
                <p>
                    Already have account? <span onClick={() => setState("login")} className="text-[#59a835] cursor-pointer">click here</span>
                </p>
            ) : (
                <p>
                    Create an account? <span onClick={() => setState("register")} className="text-[#59a835] cursor-pointer">click here</span>
                </p>
            )}
            {
                loading ? <Spinner/> :
            

            <button onClick={loginHandle} className="bg-[#59a835] hover:bg-[#8aca6c] transition-all text-white w-full py-2 rounded-md cursor-pointer">
                {state === "register" ? "Create Account" : "Login"}
            </button>

            }
        </form>
        </div>

    );
};

export default Login
