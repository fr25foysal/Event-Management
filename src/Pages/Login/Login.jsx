import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAll } from "../../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash,FaGoogle } from 'react-icons/fa';

const Login = () => {
  const navigate = useNavigate()
  
  const [show, setShow] = useState(true)
  const handlePassShow = ()=>{
    setShow(!show)
  }
  const [errMsg, setErrMsg] = useState('')
  const {loginUser,loginWithGoogle} = useContext(useAll)
  const notify =()=> toast.success("Successfully logged In")
  const handleSubmit = (e) =>{
    setErrMsg('')
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
   
    loginUser(email,password)
    .then(()=>{
      notify()
      navigate('/')
    })
    .catch(e=>setErrMsg(e.message))
  }
  
  const handleGoogleLogin = ()=>{
    loginWithGoogle()
    .then(()=>{
      notify()
      navigate('/')
    }
      )
    .catch(e=>setErrMsg(e.message) )
  }
    return (
      <div className="grid justify-center min-h-screen pt-16">
        <div className="relative flex h-fit  w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-gray-800 to-gray-600 bg-clip-border text-white shadow-lg shadow-gray-700/40">
            <h3 className="block text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
              Sign In
            </h3>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 p-6">
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-700 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  name="email"
                  required
                  type="email"
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-600 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-700 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-700 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-700 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Email
                </label>
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-700 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  name="password"
                  required
                  type={show ? "password" : "text"}
                />
                {
                  show ? <FaEyeSlash onClick={handlePassShow} className="absolute top-[14px] right-4"></FaEyeSlash> 
                  : 
                  <FaEye  onClick={handlePassShow} className="absolute top-[14px] right-4"></FaEye>
                }
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-600 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-700 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-700 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-700 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Password
                </label>
              </div>
              <div className="-ml-2.5">
                <div className="inline-flex items-center">
                  <label
                    className="relative flex cursor-pointer items-center rounded-full p-3"
                    htmlFor="checkbox"
                    data-ripple-dark="true"
                  >
                    <input
                      type="checkbox"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-700 checked:bg-gray-700 checked:before:bg-gray-700 hover:before:opacity-10"
                      id="checkbox"
                    />
                    <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </label>
                  <label
                    className="mt-px cursor-pointer select-none font-light text-gray-700"
                    htmlFor="checkbox"
                  >
                    Remember Me
                  </label>
                </div>
              </div>
            </div>
            <div className="p-6 pt-0">
              <div className="form-control">
                <button
                  className="block w-full select-none rounded-lg bg-gradient-to-tr from-gray-800 to-gray-600 py-3 px-6 text-center align-middle text-xs font-bold uppercase text-white shadow-md shadow-gray-700/20 transition-all hover:shadow-lg hover:shadow-gray-700/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
              <div className="divider">OR</div>
              <div className="flex">
            <a
            onClick={handleGoogleLogin}
             className="flex justify-center w-full mx-auto rounded-lg bg-gray-800 pt-4 pb-3 px-6 text-center align-middle text-xs font-bold uppercase text-white shadow-md shadow-gray-700/20 transition-all hover:shadow-lg hover:shadow-gray-700/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
             <FaGoogle className="text-xl mr-3 "></FaGoogle> Continue with google
            </a>
            
          </div>
              <p className="text-red-600 mt-3 text-center">{errMsg}</p>

              <p className="mt-4 block text-center  text-base font-normal leading-relaxed text-gray-700 antialiased">
                {"Don't have an account?"}
                <Link
                  className="font-semibold ml-1 transition-colors text-blue-700"
                  to={"/register"}
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
        <Toaster></Toaster>
      </div>
    );
};

export default Login;