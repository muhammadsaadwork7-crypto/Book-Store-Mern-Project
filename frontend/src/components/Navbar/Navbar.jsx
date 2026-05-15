import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGripLines } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
    const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn);
    const role = useSelector((state)=> state.auth.role);
    const links = [
        {
            title : "Home",
            link : "/"
        },
        {
            title : "All Books",
            link : "/all-books"
        }
    ];

    if (isLoggedIn) {
        links.push({
            title : "Cart",
            link : "/cart"
        });
        links.push({
            title : role === "admin" ? "Admin Profile" : "Profile",
            link : "/profile"
        });
    }
    
    const [MobileNav, setMobileNav] = useState("hidden");
    return (
    <>
    <nav className="z-50 relative bg-zinc-800 text-white px-8 py-4 flex items-center justify-between ">
        <Link to="/" className="flex items-center">
            <img  className="me-4 h-10" src="https://cdn-icons-png.flaticon.com/128/10433/10433049.png" alt="logo" />
            <h1 className="text-2xl font-semibold">BookGalaxy</h1>
        </Link>
        <div className="nav-links-bookgalaxy block md:flex items-center gap-4">
            <div className="hidden md:flex gap-4">
            { links.map((items) => (
                <div className="flex items-center" key={items.title}>
                    {items.title === "Profile" || items.title === "Admin Profile" ? (
                        <Link to={items.link} className="px-4 py-1 rounded border border-blue-500 hover:bg-white hover:text-zinc-800 transition-all duration-300"
                        > {items.title} </Link>
                    ) : (
                        <Link to={items.link} className="hover:text-blue-500 transition-all duration-300"
                        > {items.title} </Link>
                    )}
                </div>
            ))}
            </div>
            {isLoggedIn === false && (
                <div className="hidden md:flex gap-4">
                <Link to="/LogIn" className="px-4 py-1 rounded border border-blue-500 hover:bg-white hover:text-zinc-800 transition-all duration-300">
                    LogIn
                </Link>
                <Link to="/SignUp" className="px-4 py-1 rounded bg-blue-500 hover:bg-white hover:text-zinc-800 transition-all duration-300">
                    SignUp
                </Link>
            </div> 
            )}
            <button className="block md:hidden text-white text-2xl hover:text-zinc-400"
             onClick={() => setMobileNav(MobileNav === "hidden" ? "block" : "hidden")}>
                <FaGripLines />
            </button>           
        </div>
    </nav>
    <div className={` ${MobileNav}  bg-zinc-800 h-screen z-40 absolute top-0 left-0 w-full flex flex-col items-center justify-center`}>
            { links.map((items) => {
                return <Link to={items.link} className={` ${MobileNav} text-white font-semibold text-4xl mb-8 hover:text-blue-500 transition-all duration-300`}
                key={items.title}
                 onClick={() => setMobileNav(MobileNav === "hidden" ? "block" : "hidden")}
                > {items.title} </Link>
            })}
           {isLoggedIn === false && (
            <>
             <Link to="/LogIn" className={` ${MobileNav} px-8 py-2 mb-8 font-semibold text-3xl rounded border border-blue-500 text-white hover:bg-white hover:text-zinc-800 transition-all duration-300`}
             onClick={() => setMobileNav(MobileNav === "hidden" ? "block" : "hidden")}
            >
                LogIn
            </Link>
            <Link to="/SignUp" className={` ${MobileNav} px-8 py-2 mb-8 font-semibold text-3xl rounded bg-blue-500 hover:bg-white hover:text-zinc-800 transition-all duration-300`}
             onClick={() => setMobileNav(MobileNav === "hidden" ? "block" : "hidden")}
            >
                SignUp
            </Link> 
           </>
           )} 
    </div>
    </>
    );
};

export default Navbar;