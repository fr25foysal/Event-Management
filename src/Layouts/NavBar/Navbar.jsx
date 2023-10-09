import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAll } from "../../Provider/AuthProvider";

const Navbar = () => {
  const {user,logOut} = useContext(useAll)
  const handleLogOut = () =>{
    logOut()
    .then(console.log("user logged out"))
    .catch(e => console.error(e.message))
  }
    const navLinks = (
      <>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active text-[#60C0E2] bg-black " : ""
            }
            to={"/"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to={'/services'}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to={"/about-us"}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to={"/dashboard"}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to={"/managements"}
          >
            Managements
          </NavLink>
        </li>
      </>
    );
    return (
      <div>
        <div className="navbar bg-base-100 max-w-7xl mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
              {
                navLinks
              }

              </ul>
            </div>
            <Link to={'/'}>
            <img src="/logo.png" className="w-1/2" alt="" /></Link>
            </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-x-1">
              
             {
                navLinks
             }

            </ul>
          </div>
          <div className="navbar-end gap-x-3">
            {
              user ? <><div className="bg-gray-700 text-white flex content-center gap-x-2 border-2 rounded-3xl">
                <img className="w-10 rounded-full bg-slate-400" src={user ? `${user.photoURL}` : '/user.png'} alt="" />
                <p className="pr-3">{user.displayName}</p>
              </div><button onClick={handleLogOut} className="btn btn-sm">Logout</button>
              </> :
              <Link to={'/login'} className="btn btn-sm">Sign In</Link>
            }
            
            
          </div>
        </div>
      </div>
    );
};

export default Navbar;