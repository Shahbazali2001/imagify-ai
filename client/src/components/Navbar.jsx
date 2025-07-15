// Context API 
import { useContext } from "react";
import  AppContext  from "../context/AppContext";

// Assets
import { assets } from "../assets/assets";

// React Router
import { Link, useNavigate } from "react-router-dom";

// Axios and Toast
import axiosInstance from "../api/axiosInstance";
import { toast } from "react-toastify";


const Navbar = () => {

  const { user, setUser, setOpen, setToken, credits } = useContext(AppContext);
  const navigate = useNavigate();


  const logOutHandler = async () => {
    try {
      await axiosInstance.post("/user/logout");
      localStorage.removeItem("token");
      setToken(false);
      setUser(false);
      navigate("/");
      toast.success("User logged out successfully");
    } catch (error) {
      console.error("Logout error:", error.message);
      toast.error(error.response.data.message);
    }
  };



  return (
    <div className="flex justify-between items-center py-4">
      <div>
        <Link to="/">
          <img
            src={assets.logo}
            alt="Imagify Ai"
            className="w-28 sm:w-32 md:w-36 lg:w-40"
          />
        </Link>
      </div>

      <div>
        {user ? (
          // Logged In User
          <div className="flex justify-between items-center gap-4 sm:gap-3 ">
            <button onClick={() => navigate("/buy-credit")} className="flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-300">
              <img className="w-5 sm:w-6" src={assets.credit_star} alt="" />
              <p className="text-xs sm:text-sm font-medium text-gray-600">
              Credits Left : {credits}
              </p>
            </button>
            <p className="text-gray-600 max-sm:hidden pl-4">{user.name}</p>
            <div className="relative group">
              <img
                className="w-10 drop-shadow"
                src={assets.profile_icon}
                alt=""
              />
              <div className="absolute hidden  group-hover:block top-0 right-0 left-0 z-10 text-black rounded pt-12">
                <ul className=" m-0 py-2 px-4 w-full  border border-gray-200 bg-white rounded-md text-sm">
                  <li onClick={logOutHandler} className="cursor-pointer">Logout</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          // Logged Out User
          <div className="flex items-center gap-2 sm:gap-5">
            <p
              className="cursor-pointer text-[#545454]"
              onClick={() => navigate("/buy-credit")}
            >
              Pricing
            </p>
            <button onClick={() => setOpen(true)} className="bg-zinc-800 text-white px-8 py-2 text-sm sm:px-10 rounded-full cursor-pointer ">
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
